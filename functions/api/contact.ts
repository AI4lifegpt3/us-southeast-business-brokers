export const onRequestPost: PagesFunction = async (context) => {
  try {
    const body = await context.request.json() as any;
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const timestamp = new Date().toISOString();

    // Log the lead (visible in CF dashboard > Pages > Functions logs)
    console.log('NEW LEAD:', JSON.stringify({ name, email, phone, subject, message, timestamp }));

    // Send email notification via brad's email
    // TODO: Wire to Google Sheets webhook when available

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to submit' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
