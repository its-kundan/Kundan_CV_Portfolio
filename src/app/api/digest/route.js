import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory storage for digest (in production, use database)
const digestStore = new Map();

export async function POST(request) {
  try {
    const { email, subject, message } = await request.json();

    // Store message for digest instead of sending immediately
    const today = new Date().toDateString();
    const digestKey = `${email}_${today}`;
    
    if (!digestStore.has(digestKey)) {
      digestStore.set(digestKey, []);
    }
    
    const messages = digestStore.get(digestKey);
    messages.push({
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });
    
    digestStore.set(digestKey, messages);

    // Send digest if it's the first message of the day or if there are 5+ messages
    if (messages.length === 1 || messages.length >= 5) {
      await sendDigest(messages, today);
    }

    return Response.json({ 
      message: 'Message stored for digest',
      digestMode: true,
      messageCount: messages.length
    }, { status: 200 });
  } catch (error) {
    console.error('Error processing digest:', error);
    return Response.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}

async function sendDigest(messages, date) {
  const digestTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px;">
      <div style="background-color: white; border-radius: 8px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2c3e50; margin: 0; font-size: 24px;">📬 Daily Contact Digest</h1>
          <p style="color: #7f8c8d; margin: 10px 0 0 0;">${messages.length} message(s) for Kundan Kumar</p>
          <p style="color: #7f8c8d; margin: 5px 0 0 0; font-size: 14px;">${date}</p>
        </div>
        
        ${messages.map((msg, index) => `
          <div style="background-color: #ecf0f1; padding: 20px; border-radius: 6px; margin-bottom: 20px; border-left: 4px solid #3498db;">
            <div style="margin-bottom: 10px;">
              <strong style="color: #2c3e50;">👤 From:</strong>
              <span style="color: #34495e; margin-left: 10px;">${msg.email}</span>
            </div>
            <div style="margin-bottom: 10px;">
              <strong style="color: #2c3e50;">📝 Subject:</strong>
              <span style="color: #34495e; margin-left: 10px;">${msg.subject}</span>
            </div>
            <div style="margin-bottom: 10px;">
              <strong style="color: #2c3e50;">💬 Message:</strong>
            </div>
            <div style="background-color: white; padding: 15px; border-radius: 4px; color: #2c3e50; line-height: 1.6;">
              ${msg.message.replace(/\n/g, '<br>')}
            </div>
            <div style="margin-top: 10px; font-size: 12px; color: #7f8c8d;">
              📅 ${new Date(msg.timestamp).toLocaleTimeString()}
            </div>
          </div>
        `).join('')}
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ecf0f1; text-align: center;">
          <p style="color: #7f8c8d; font-size: 12px; margin: 0;">
            This digest contains all contact form messages from your portfolio
          </p>
        </div>
      </div>
    </div>
  `;

  await resend.emails.send({
    from: 'Kundan Kumar Portfolio <onboarding@resend.dev>',
    to: ['kundan51kk@gmail.com'],
    subject: `📬 Daily Digest: ${messages.length} Contact Message(s)`,
    html: digestTemplate,
  });
}
