# GoHighLevel (GHL) Webhook Integration Guide

This guide explains how to set up contact form submissions to automatically create/update contacts in GoHighLevel CRM.

---

## Overview

When a user submits a contact form on the website, the data is sent to a **server-side API route** which then forwards it to GoHighLevel via a webhook. This server-side approach is required because browsers block direct cross-origin requests to external webhooks (CORS).

**Flow:**
```
User submits form → Frontend calls /api/contact-webhook → Vercel serverless function → GoHighLevel webhook → Contact created in GHL
```

---

## Step 1: Get Your GHL Webhook URL

1. Log into GoHighLevel
2. Go to **Automation** → **Workflows**
3. Create a new workflow or edit an existing one
4. Add a trigger: **Inbound Webhook**
5. Copy the webhook URL (looks like):
   ```
   https://services.leadconnectorhq.com/hooks/XXXXXXX/webhook-trigger/XXXXXXX
   ```

---

## Step 2: Create the Vercel Serverless Function

Create a file at `/api/contact-webhook.js` in your project root:

```javascript
// Vercel Serverless Function to proxy contact form data to GoHighLevel
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // ⚠️ REPLACE WITH YOUR GHL WEBHOOK URL
  const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/YOUR_HOOK_ID/webhook-trigger/YOUR_TRIGGER_ID';

  try {
    const { name, email, phone, inquiryType, message } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Prepare GHL payload
    const ghlPayload = {
      // Standard contact fields
      name: name.trim(),
      firstName: name.trim().split(' ')[0],
      lastName: name.trim().split(' ').slice(1).join(' ') || '',
      full_name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone?.trim() || '',
      message: message?.trim() || '',
      
      // Source tracking
      source: 'Website Contact Form',
      inquiry_type: inquiryType || 'General Inquiry',
      
      // Timestamp
      submittedAt: new Date().toISOString(),
    };

    // Send to GoHighLevel webhook
    const ghlResponse = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ghlPayload),
    });

    if (!ghlResponse.ok) {
      const errorText = await ghlResponse.text();
      console.error('GHL webhook failed:', ghlResponse.status, errorText);
      return res.status(500).json({ error: 'Failed to send to CRM', details: errorText });
    }

    console.log('GHL webhook sent successfully');
    return res.status(200).json({ success: true, message: 'Contact submitted to CRM' });

  } catch (error) {
    console.error('Error in contact-webhook:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
```

---

## Step 3: Update vercel.json

Add a rewrite rule to ensure `/api/*` routes go to serverless functions **before** the SPA catch-all:

```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "/api/:path*"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Important:** The `/api/:path*` rule must come BEFORE the catch-all `/(.*)`rule.

---

## Step 4: Update Your Contact Form

In your React contact form component, call the API route instead of the webhook directly:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    // Send to GoHighLevel via server-side API route
    await fetch('/api/contact-webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        inquiryType: formData.inquiryType || 'General Inquiry',
        message: formData.message || '',
      }),
    });
    
    // Handle success...
  } catch (error) {
    console.error('Error sending to GHL:', error);
    // Continue with form submission even if GHL fails
  }
};
```

---

## Step 5: Configure GHL Workflow

In GoHighLevel, set up your workflow to map the incoming webhook fields:

### Trigger: Inbound Webhook
The webhook will receive a JSON payload with these fields:

| Field | Description | Example |
|-------|-------------|---------|
| `name` | Full name | "John Doe" |
| `firstName` | First name | "John" |
| `lastName` | Last name | "Doe" |
| `full_name` | Full name (duplicate for compatibility) | "John Doe" |
| `email` | Email address | "john@example.com" |
| `phone` | Phone number | "(555) 123-4567" |
| `message` | User's message | "I'm interested in..." |
| `source` | Lead source | "Website Contact Form" |
| `inquiry_type` | Type of inquiry | "Ceramic Coating" |
| `submittedAt` | ISO timestamp | "2026-03-21T21:32:00.000Z" |

### Action: Create/Update Contact
Map the fields using GHL's template syntax:

| GHL Field | Mapping |
|-----------|---------|
| Full Name | `{{inboundWebhookRequest.full_name}}` |
| Email | `{{inboundWebhookRequest.email}}` |
| Phone | `{{inboundWebhookRequest.phone}}` |
| Your Message (custom field) | `{{inboundWebhookRequest.message}}` |

---

## Step 6: Deploy & Test

1. **Deploy to Vercel:**
   ```bash
   vercel --prod
   ```

2. **Test the webhook directly (optional):**
   ```bash
   curl -X POST "YOUR_GHL_WEBHOOK_URL" \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test User",
       "firstName": "Test",
       "lastName": "User",
       "full_name": "Test User",
       "email": "test@example.com",
       "phone": "(555) 123-4567",
       "message": "Test message",
       "source": "Website Contact Form",
       "inquiry_type": "General Inquiry",
       "submittedAt": "2026-03-21T21:32:00.000Z"
     }'
   ```

3. **Submit a test form** on your live site and verify the contact appears in GHL.

---

## Troubleshooting

### Form submits but no contact in GHL
- Check Vercel function logs: `vercel logs`
- Verify the webhook URL is correct in `/api/contact-webhook.js`
- Test the webhook directly with curl

### CORS errors in browser console
- Make sure you're calling `/api/contact-webhook` (your API route), NOT the GHL webhook URL directly
- The API route handles CORS headers automatically

### 404 on /api/contact-webhook
- Ensure the file is at `/api/contact-webhook.js` (in project root, not `/src/api/`)
- Check `vercel.json` has the API rewrite rule before the catch-all
- Redeploy: `vercel --prod`

### GHL workflow not triggering
- In GHL, check the workflow is **published** (not draft)
- Check the "Mapping Reference" dropdown in the Inbound Webhook trigger to see if requests are being received

---

## File Structure

```
project-root/
├── api/
│   └── contact-webhook.js    ← Vercel serverless function
├── components/
│   └── Contact.tsx           ← Form component
├── vercel.json               ← Routing config
└── ...
```

---

## Adding Custom Fields

To add more fields to the webhook payload:

1. **Update the API route** (`/api/contact-webhook.js`):
   ```javascript
   const ghlPayload = {
     // ... existing fields
     vehicleType: req.body.vehicleType || '',
     preferredDate: req.body.preferredDate || '',
   };
   ```

2. **Update the form submission**:
   ```typescript
   body: JSON.stringify({
     // ... existing fields
     vehicleType: formData.vehicleType,
     preferredDate: formData.preferredDate,
   }),
   ```

3. **Map in GHL workflow**:
   - `{{inboundWebhookRequest.vehicleType}}`
   - `{{inboundWebhookRequest.preferredDate}}`

---

## Security Notes

- The webhook URL is stored server-side in the API route, not exposed to the browser
- Vercel serverless functions run in a secure environment
- Consider adding rate limiting for production sites
- The GHL webhook URL should be treated as sensitive (don't commit to public repos)

---

*Last updated: March 2026*
