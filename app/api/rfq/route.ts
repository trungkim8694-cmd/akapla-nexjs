import { google } from "googleapis";
import { NextResponse } from "next/server";
import admin from "firebase-admin";
import nodemailer from "nodemailer";

// Khởi tạo Firebase Admin
if (!admin.apps.length) {
  const rawCredentials = JSON.parse(
    process.env.GOOGLE_SERVICE_ACCOUNT_KEY || "{}",
  );
  if (rawCredentials.private_key) {
    rawCredentials.private_key = rawCredentials.private_key.replace(
      /\\n/g,
      "\n",
    );
  }
  admin.initializeApp({
    credential: admin.credential.cert(rawCredentials),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET?.replace("gs://", ""),
  });
}

const bucket = admin.storage().bucket();

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
    const file = formData.get("file") as File | null;

    let fileUrl = "No file uploaded";

    // 1. Tải file lên Firebase Storage
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const safeName = `${Date.now()}_${file.name.replace(/\s+/g, "_")}`;
      const blob = bucket.file(`rfq_drawings/${safeName}`);
      await blob.save(buffer, { contentType: file.type, public: true });
      fileUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(blob.name)}?alt=media`;
    }

    // 2. Ghi dữ liệu vào Google Sheets
    const rawCredentials = JSON.parse(
      process.env.GOOGLE_SERVICE_ACCOUNT_KEY || "{}",
    );
    if (rawCredentials.private_key) {
      rawCredentials.private_key = rawCredentials.private_key.replace(
        /\\n/g,
        "\n",
      );
    }
    const auth = new google.auth.GoogleAuth({
      credentials: rawCredentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });
    const timestamp = new Date().toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            timestamp,
            companyName,
            contactEmail,
            productType,
            requestVisitOrPrototype,
            notes,
            fileUrl,
          ],
        ],
      },
    });

    // 3. Gửi thông báo TELEGRAM cho bạn (Mẫu chuyên nghiệp)
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Định dạng tin nhắn với Emoji và xuống dòng rõ ràng
    const telegramMsg = `
🔔 *[RFQ] Yêu cầu báo giá mới* 🔔

🏢 *Công ty:* ${companyName}
👤 *Email:* ${contactEmail}
📦 *Sản phẩm:* ${productType}
🛠 *Yêu cầu:* ${requestVisitOrPrototype}
📝 *Ghi chú:* ${notes || "Không có"}

📎 *Tệp đính kèm:* [Xem tại đây](${fileUrl})
`;

    try {
      await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMsg,
          parse_mode: "Markdown", // Giúp in đậm và tạo link
        }),
      });
    } catch (err) {
      console.error("Telegram Error:", err);
    }

    // 4. Gửi GMAIL TIẾNG NHẬT cho khách hàng
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    try {
      await transporter.sendMail({
        from: `"AKAPLA Connector" <${process.env.EMAIL_USER}>`,
        to: contactEmail,
        subject: "【AKAPLA Connector】お見積り依頼を承りました",
        html: `
          <p>${companyName} 様</p>
          <p>この度はお見積りをご依頼いただき、誠にありがとうございます。<br>AKAPLA Connectorでございます。</p>
          <p>以下の内容でお問い合わせを承りました。</p>
          <hr>
          <p><b>お問い合わせ日時:</b> ${timestamp}</p>
          <p><b>製品種別:</b> ${productType}</p>
          <p><b>備考:</b> ${notes || "なし"}</p>
          <hr>
          <p>内容を確認の上、通常48時間以内（休日を除く）に担当者よりご連絡を差し上げます。</p>
          <p>今しばらくお待ちいただけますようお願い申し上げます。</p>
          <br>
          <p>--------------------------------------------------</p>
          <p><b>AKAPLA Connector Team</b></p>
          <p>Website: your-website.com</p>
          <p>--------------------------------------------------</p>
        `,
      });
    } catch (err) {
      console.error("Gmail Error:", err);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Critical Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
