import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend. If no key is provided, we will mock the response for the template.
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, service, message } = data;

    // If we have a real Resend API key, send the email
    if (resend) {
      await resend.emails.send({
        from: 'Citas <onboarding@resend.dev>', // Replace with verified domain later
        to: 'roxanagrimaldo@example.com', // Replace with owner's email
        subject: `Nueva solicitud de cita - ${service}`,
        html: `
          <h1>Nueva solicitud de cita</h1>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Servicio:</strong> ${service}</p>
          <p><strong>Mensaje:</strong> ${message || 'N/A'}</p>
        `
      });
      
      // Auto-reply to client
      await resend.emails.send({
        from: 'Roxana Grimaldo <onboarding@resend.dev>', // Replace with verified domain
        to: email,
        subject: 'Hemos recibido tu solicitud de cita',
        html: `
          <h2>Hola ${name},</h2>
          <p>Gracias por contactarnos. Hemos recibido tu solicitud para el servicio de <strong>${service}</strong>.</p>
          <p>Nos pondremos en contacto contigo pronto para confirmar la fecha y hora.</p>
          <br/>
          <p>Atentamente,</p>
          <p><strong>Roxana Grimaldo Esteticista</strong></p>
        `
      });
    } else {
      // Mock delay to simulate network request for the UI presentation
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Mock Email Sent: ", data);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
