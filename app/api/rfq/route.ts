import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const companyName = formData.get("companyName") as string;
    const contactEmail = formData.get("contactEmail") as string;
    const productType = formData.get("productType") as string;
    const notes = formData.get("notes") as string;
    const requestVisitOrPrototype = formData.get(
      "requestVisitOrPrototype",
    ) as string;

    // --- 1. LẤY TẤT CẢ FILE (Dùng getAll thay vì get) ---
    const files = formData.getAll("files") as File[];
    const fileUrls: string[] = [];

    // --- 2. VÒNG LẶP TẢI TỪNG FILE LÊN SUPABASE ---
    if (files && files.length > 0) {
      for (const file of files) {
        if (file.size === 0) continue;

        const buffer = Buffer.from(await file.arrayBuffer());

        // Làm sạch tên file
        const safeName = file.name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-zA-Z0-9.]/g, "_")
          .replace(/_{2,}/g, "_");

        const fileName = `${Date.now()}_${safeName}`;
        const filePath = `rfq_drawings/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("drawings")
          .upload(filePath, buffer, {
            contentType: file.type,
            upsert: false,
          });

        if (uploadError) {
          console.error(`Lỗi upload file ${file.name}:`, uploadError);
          continue; // Bỏ qua file lỗi, tiếp tục file khác
        }

        const { data } = supabase.storage
          .from("drawings")
          .getPublicUrl(filePath);
        fileUrls.push(data.publicUrl);
      }
    }

    // Chuyển mảng URL thành chuỗi để lưu vào DB và gửi thông báo
    const fileUrlString =
      fileUrls.length > 0 ? fileUrls.join(", ") : "No file uploaded";

    // --- 3. LƯU VÀO DATABASE ---
    const { error: dbError } = await supabase.from("rfq_submissions").insert([
      {
        company_name: companyName,
        contact_email: contactEmail,
        product_type: productType,
        request_visit: requestVisitOrPrototype,
        notes: notes,
        file_url: fileUrlString, // Lưu tất cả các link cách nhau bởi dấu phẩy
      },
    ]);

    if (dbError) throw dbError;

    // --- 4. GỬI TELEGRAM (Tạo danh sách link đẹp hơn) ---
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Tạo danh sách link HTML cho Telegram
    const fileLinksHtml =
      fileUrls.length > 0
        ? fileUrls
            .map((url, i) => `<a href="${url}">Bản vẽ ${i + 1}</a>`)
            .join(" | ")
        : "Không có";

    const telegramMsg =
      `<b>🔔 [YÊU CẦU BÁO GIÁ MỚI]</b>\n\n` +
      `<b>🏢 Công ty:</b> ${companyName}\n` +
      `<b>👤 Email:</b> ${contactEmail}\n` +
      `<b>📦 Sản phẩm:</b> ${productType}\n` +
      `<b>📝 Ghi chú:</b> ${notes || "Không có"}\n` +
      `<b>📎 File đính kèm:</b> ${fileLinksHtml}`;

    await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMsg,
        parse_mode: "HTML",
        disable_web_page_preview: true, // Tắt xem trước link để tin nhắn gọn hơn
      }),
    });

    // --- 5. GỬI GMAIL XÁC NHẬN ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"AKAPLA" <${process.env.EMAIL_USER}>`,
      replyTo: "info@aka-pla.com",
      to: contactEmail,
      subject: "【AKAPLA】お見積り依頼を承りました",
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #1e3a8a;">AKAPLA RFQ Confirmation</h2>
          <p>${companyName} 様</p>
          <p>お問い合わせありがとうございます。内容を確認し、担当者よりご連絡いたします。</p>
          <div style="background: #f9fafb; padding: 15px; border-radius: 8px;">
            <p><strong>product:</strong> ${productType}</p>
            <p><strong>Number of files sent:</strong> ${fileUrls.length}</p>
          </div>
          <p style="font-size: 12px; color: #666; margin-top: 20px;">※本メールは自動送信です。</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
