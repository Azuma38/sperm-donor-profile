import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const {
      name,
      nickname,
      phone,
      email,
      method,
      message,
      consent,
    } = data;

    // Validate required fields
    if (!name || !phone || !email || !method || !message || consent !== 'yes') {
      return NextResponse.json(
        { error: '必須項目が入力されていないか、同意がありません' },
        { status: 400 }
      );
    }

    // Format the message
    const formattedMessage = `【新規ご依頼】

お名前: ${name}
${nickname ? `ニックネーム: ${nickname}\n` : ''}電話番号: ${phone}
メール: ${email}
提供方法: ${method === 'syringe' ? 'シリンジ法' : 'タイミング法'}

ご状況・ ご動機・ ご意志:
${message}

─────────────────────
このお知らせはフォームからの自動送信です。`;

    // Get Telegram bot token from environment
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('Telegram configuration missing');
      return NextResponse.json(
        { error: 'サーバー設定エラー' },
        { status: 500 }
      );
    }

    // Send message to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: formattedMessage,
          parse_mode: 'HTML',
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error('Telegram API error:', errorData);
      return NextResponse.json(
        { error: 'メッセージの送信に失敗しました' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
