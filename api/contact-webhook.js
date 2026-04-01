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

  const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/Z5wxGFTwXwvKwcjoFyON/webhook-trigger/54afbec0-ccfc-4b48-99a2-2857e35b59f4';

  try {
    const { name, email, phone, inquiryType, message, smsOptIn } = req.body;

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
      
      // SMS Opt-in for A2P compliance
      sms_opt_in: smsOptIn === true,
      
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
