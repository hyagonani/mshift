import { NextRequest, NextResponse } from 'next/server';

const META_PIXEL_ID = process.env.META_PIXEL_ID || '436022632321934';
const META_CAPI_ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN || '';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
      eventName = 'Lead', 
      eventId, 
      eventSourceUrl, 
      contentName = 'Aula Usinagem WhatsApp Group', 
      contentCategory = 'Aula Usinagem' 
    } = body;

    // Obter IP do cliente e User Agent dos headers da requisição
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0] || req.headers.get('x-real-ip') || '';
    const clientUserAgent = req.headers.get('user-agent') || '';

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId || `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
          event_source_url: eventSourceUrl || req.headers.get('referer') || 'https://mshift.com.br/aula-usinagem',
          action_source: 'website',
          user_data: {
            client_ip_address: clientIp,
            client_user_agent: clientUserAgent,
          },
          custom_data: {
            content_name: contentName,
            content_category: contentCategory,
          },
        },
      ],
      access_token: META_CAPI_ACCESS_TOKEN,
    };

    const response = await fetch(`https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Error sending Meta CAPI event:', data);
      return NextResponse.json({ success: false, error: data }, { status: response.status });
    }

    return NextResponse.json({ success: true, metaResult: data });
  } catch (error: any) {
    console.error('Meta CAPI route exception:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
