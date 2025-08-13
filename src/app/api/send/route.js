import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory storage for rate limiting (in production, use Redis or database)
const messageStore = new Map();

// Rate limiting: max 3 messages per email per hour
const RATE_LIMIT = {
  maxMessages: 3,
  timeWindow: 60 * 60 * 1000, // 1 hour in milliseconds
};

// Spam detection patterns
const SPAM_PATTERNS = [
  /\b(buy|sell|investment|money|cash|loan|credit|debt)\b/i,
  /\b(viagra|cialis|weight loss|diet)\b/i,
  /\b(click here|limited time|act now|urgent)\b/i,
];

function isSpam(message, subject, email) {
  const content = `${subject} ${message}`.toLowerCase();
  
  // Check for spam patterns
  for (const pattern of SPAM_PATTERNS) {
    if (pattern.test(content)) {
      return true;
    }
  }
  
  // Check for excessive caps
  const capsRatio = (content.match(/[A-Z]/g) || []).length / content.length;
  if (capsRatio > 0.7) {
    return true;
  }
  
  // Check for suspicious email patterns
  if (email.includes('noreply') || email.includes('no-reply')) {
    return true;
  }
  
  return false;
}

function isRateLimited(email) {
  const now = Date.now();
  const userMessages = messageStore.get(email) || [];
  
  // Remove old messages outside the time window
  const recentMessages = userMessages.filter(
    timestamp => now - timestamp < RATE_LIMIT.timeWindow
  );
  
  // Update store with recent messages
  messageStore.set(email, recentMessages);
  
  // Check if user has exceeded rate limit
  if (recentMessages.length >= RATE_LIMIT.maxMessages) {
    return true;
  }
  
  // Add current message timestamp
  recentMessages.push(now);
  messageStore.set(email, recentMessages);
  
  return false;
}

export async function POST(request) {
  try {
    const { email, subject, message } = await request.json();

    // Validate input
    if (!email || !subject || !message) {
      return Response.json(
        { error: 'Email, subject, and message are required' },
        { status: 400 }
      );
    }

    // Check for spam
    if (isSpam(message, subject, email)) {
      console.log(`Spam detected from ${email}: ${subject}`);
      return Response.json(
        { error: 'Message appears to be spam and was blocked' },
        { status: 403 }
      );
    }

    // Check rate limiting
    if (isRateLimited(email)) {
      return Response.json(
        { error: 'Too many messages. Please wait before sending another.' },
        { status: 429 }
      );
    }

    // Create a more organized email template
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px;">
        <div style="background-color: white; border-radius: 8px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2c3e50; margin: 0; font-size: 24px;">📧 New Portfolio Contact</h1>
            <p style="color: #7f8c8d; margin: 10px 0 0 0;">Message for Kundan Kumar</p>
          </div>
          
          <div style="background-color: #ecf0f1; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <div style="margin-bottom: 15px;">
              <strong style="color: #2c3e50;">👤 From:</strong>
              <span style="color: #34495e; margin-left: 10px;">${email}</span>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #2c3e50;">📝 Subject:</strong>
              <span style="color: #34495e; margin-left: 10px;">${subject}</span>
            </div>
            <div>
              <strong style="color: #2c3e50;">💬 Message:</strong>
            </div>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #3498db; border-radius: 4px;">
            <div style="color: #2c3e50; line-height: 1.6; white-space: pre-wrap;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ecf0f1; text-align: center;">
            <p style="color: #7f8c8d; font-size: 12px; margin: 0;">
              📅 Sent on ${new Date().toLocaleString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
            <p style="color: #7f8c8d; font-size: 12px; margin: 5px 0 0 0;">
              This message was sent from Kundan Kumar's portfolio contact form
            </p>
          </div>
        </div>
      </div>
    `;

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Kundan Kumar Portfolio <onboarding@resend.dev>',
      to: ['kundan51kk@gmail.com'],
      subject: `📧 Portfolio Contact: ${subject}`,
      html: emailTemplate,
    });

    return Response.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
