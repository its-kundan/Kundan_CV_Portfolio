import { Resend } from 'resend';
import { verifyPassword } from '@/lib/auth';

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory storage for messages (in production, use database)
let messages = [];

// Get password from environment (supports both plain text and hashed)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'kundan2024';
const HASHED_ADMIN_PASSWORD = process.env.HASHED_ADMIN_PASSWORD || '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj4J/HS.iK8O'; // Default: kundan2024

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const password = searchParams.get('password');
  
  if (!password) {
    return Response.json({ error: 'Password required' }, { status: 401 });
  }
  
  // Check if password matches (supports both plain text and hashed)
  let isValid = false;
  
  // First try plain text comparison (for backward compatibility)
  if (password === ADMIN_PASSWORD) {
    isValid = true;
  } else {
    // Then try hashed password verification
    isValid = await verifyPassword(password, HASHED_ADMIN_PASSWORD);
  }
  
  if (!isValid) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  return Response.json({ messages: messages.reverse() }); // Show newest first
}

export async function POST(request) {
  try {
    const { email, subject, message, useDigest = false } = await request.json();

    // Validate input
    if (!email || !subject || !message) {
      return Response.json(
        { error: 'Email, subject, and message are required' },
        { status: 400 }
      );
    }

    // Create message object
    const messageObj = {
      id: Date.now().toString(),
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      status: 'unread',
      useDigest
    };

    // Store message
    messages.push(messageObj);

    // If not using digest, send immediate notification
    if (!useDigest) {
      await sendNotification(messageObj);
    }

    return Response.json({ 
      message: 'Message stored successfully',
      messageId: messageObj.id
    }, { status: 200 });
  } catch (error) {
    console.error('Error storing message:', error);
    return Response.json(
      { error: 'Failed to store message' },
      { status: 500 }
    );
  }
}

async function sendNotification(messageObj) {
  const notificationTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px;">
      <div style="background-color: white; border-radius: 8px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2c3e50; margin: 0; font-size: 24px;">📧 New Portfolio Message</h1>
          <p style="color: #7f8c8d; margin: 10px 0 0 0;">Check your dashboard for details</p>
        </div>
        
        <div style="background-color: #ecf0f1; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
          <div style="margin-bottom: 15px;">
            <strong style="color: #2c3e50;">👤 From:</strong>
            <span style="color: #34495e; margin-left: 10px;">${messageObj.email}</span>
          </div>
          <div style="margin-bottom: 15px;">
            <strong style="color: #2c3e50;">📝 Subject:</strong>
            <span style="color: #34495e; margin-left: 10px;">${messageObj.subject}</span>
          </div>
          <div style="margin-bottom: 10px;">
            <strong style="color: #2c3e50;">💬 Preview:</strong>
          </div>
          <div style="background-color: white; padding: 15px; border-radius: 4px; color: #2c3e50; line-height: 1.6;">
            ${messageObj.message.substring(0, 200)}${messageObj.message.length > 200 ? '...' : ''}
          </div>
        </div>
        
                 <div style="text-align: center; margin-top: 30px;">
           <a href="${process.env.DASHBOARD_URL || 'http://localhost:3000/dashboard'}" 
              style="background-color: #3498db; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
             📊 View in Dashboard
           </a>
         </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ecf0f1; text-align: center;">
          <p style="color: #7f8c8d; font-size: 12px; margin: 0;">
            📅 ${new Date(messageObj.timestamp).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  `;

  await resend.emails.send({
    from: 'Kundan Kumar Portfolio <onboarding@resend.dev>',
    to: ['kundan51kk@gmail.com'],
    subject: `📧 New Message: ${messageObj.subject}`,
    html: notificationTemplate,
  });
}
