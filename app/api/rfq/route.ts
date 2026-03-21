import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

// Khởi tạo Supabase Client cho Backend (Dùng SERVICE ROLE KEY để ghi vào DB)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function POST(req: Request) {
  try {
    // --- LOGIC MỚI: NHẬN JSON ---
    const body = await req.json();
    const {
      companyName,
      contactEmail,
      productType,
      notes,
      requestVisitOrPrototype,
      fileUrl, // Nhận chuỗi URL đã nối bằng dấu phẩy từ Frontend
    } = body;

    // --- 1. LƯU VÀO DATABASE ---
    const { error: dbError } = await supabase.from("rfq_submissions").insert([
      {
        company_name: companyName,
        contact_email: contactEmail,
        product_type: productType,
        request_visit: requestVisitOrPrototype,
        notes: notes,
        file_url: fileUrl, // Lưu chuỗi link
      },
    ]);

    if (dbError) throw dbError;

    // --- 2. GỬI TELEGRAM (Sử dụng chuỗi URL nhận được) ---
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Tách chuỗi URL thành mảng để tạo link đẹp
    const fileUrls =
      fileUrl && fileUrl !== "No file uploaded" ? fileUrl.split(", ") : [];

    const fileLinksHtml =
      fileUrls.length > 0
        ? fileUrls
            .map(
              (url: string, i: number) =>
                `<a href="${url.trim()}">Bản vẽ ${i + 1}</a>`,
            )
            .join(" | ")
        : "Không có";

    const telegramMsg =
      `<b>🔔 [YÊU CẦU BÁO GIÁ MỚI - FILE LỚN]</b>\n\n` +
      `<b>🏢 Công ty:</b> ${companyName}\n` +
      `<b>👤 Email:</b> ${contactEmail}\n` +
      `<b>📦 Sản phẩm:</b> ${productType}\n` +
      `<b>📝 Ghi chú:</b> ${notes || "Không có"}\n` +
      `<b>📎 Bản vẽ:</b> ${fileLinksHtml}`;

    await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMsg,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    // --- 3. GỬI GMAIL XÁC NHẬN ---
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
            <p><strong>Sản phẩm:</strong> ${productType}</p>
            <p><strong>Số lượng file đã gửi:</strong> ${fileUrls.length}</p>
          </div>
          <p style="font-size: 12px; color: #666; margin-top: 20px;">※本メール là tự động gửi.</p>
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
