# Email Setup Guide

## Resend Configuration

To enable email functionality in your portfolio, follow these steps:

### 1. Get Resend API Key
1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to the API Keys section
4. Create a new API key
5. Copy the API key

### 2. Configure Environment Variables
Create a `.env.local` file in your project root with the following content:

```env
RESEND_API_KEY=your_actual_resend_api_key_here
ADMIN_PASSWORD=your_dashboard_password_here
DASHBOARD_URL=http://localhost:3000/dashboard
```

Replace `your_actual_resend_api_key_here` with the API key you copied from Resend.
Replace `your_dashboard_password_here` with your dashboard password.

**Note:** You can use either:
- `ADMIN_PASSWORD=your_password` (plain text - simpler)
- `HASHED_ADMIN_PASSWORD=your_hashed_password` (encrypted - more secure)

### 3. Setup Secure Password (Recommended)
1. Navigate to `/setup-password` on your site
2. Generate a secure password or enter your own
3. Copy the hashed password to your `.env.local` file
4. Use the original password to log into the dashboard

**Note:** The default password `kundan2024` is still available but not recommended for production.

### 3. Verify Your Domain (Optional)
By default, the email will be sent from `onboarding@resend.dev`. To use your own domain:

1. In your Resend dashboard, go to Domains
2. Add and verify your domain
3. Update the `from` field in `src/app/api/send/route.js`:
   ```javascript
   from: 'Kundan Kumar <contact@yourdomain.com>'
   ```

### 4. Update Recipient Email
In `src/app/api/send/route.js`, update the `to` field with your email address:
```javascript
to: ['kundan51kk@gmail.com']
```

**Note:** This is already configured for Kundan Kumar's email address.

### 5. Test the Email Functionality
1. Start your development server: `npm run dev`
2. Navigate to your contact section
3. Fill out the contact form
4. Submit and check if you receive the email

### 6. Access Your Dashboard
1. Navigate to `/dashboard` on your site
2. Enter your dashboard password (set in `.env.local`)
3. View and manage all portfolio messages
4. Alternative: Click the dashboard link in notification emails

## Email Management Features

### 🛡️ Spam Protection
- Automatically detects and blocks spam messages
- Filters out messages with suspicious content
- Blocks emails from noreply addresses
- Prevents excessive capitalization

### ⏱️ Rate Limiting
- Maximum 3 messages per email address per hour
- Prevents spam and abuse
- Automatic cleanup of old rate limit data

### 📬 Daily Digest Mode
- Option to consolidate multiple messages into daily summaries
- Reduces email clutter significantly
- Sends digest when:
  - First message of the day
  - 5 or more messages accumulated
- Users can choose between immediate sending or digest mode

### 📧 Email Organization
- Professional HTML templates with emojis and better formatting
- Clear subject lines with 📧 prefix
- Timestamp information
- Better visual hierarchy

### 📊 Admin Dashboard
- **Centralized message management** - All messages in one place
- **Search and filter** - Find messages quickly
- **Read/unread status** - Track which messages you've seen
- **Message preview** - Quick overview without opening emails
- **Delete messages** - Remove unwanted messages
- **Secure access** - Password-protected dashboard
- **Real-time updates** - See new messages instantly

### 🔐 Password Security
- **bcrypt encryption** - Industry-standard password hashing
- **12 salt rounds** - Maximum security against brute force attacks
- **Password validation** - Enforces strong password requirements
- **Secure generation** - Cryptographically secure random passwords
- **No plain text storage** - Passwords are never stored in plain text
- **Setup wizard** - Easy password configuration at `/setup-password`

## Features
- ✅ Email validation
- ✅ Professional HTML email template
- ✅ Error handling
- ✅ Success feedback to users
- ✅ Secure API key storage
- ✅ **Spam detection** - Automatically blocks suspicious messages
- ✅ **Rate limiting** - Max 3 messages per email per hour
- ✅ **Daily digest mode** - Option to consolidate multiple messages into daily summaries
- ✅ **Better email organization** - Cleaner, more professional email templates

## Troubleshooting
- Make sure your `.env.local` file is in the project root
- Verify your Resend API key is correct
- Check the browser console for any errors
- Ensure your Resend account is active and not suspended
