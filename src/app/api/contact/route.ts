import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  // Inicializamos Resend dentro de la función para que no rompa el build de Vercel
  const resend = new Resend(process.env.RESEND_API_KEY || 're_XGwYDW1D_48fsMRQqdq4GC1G9geDLhwtZ');

  try {
    const data = await request.json();
    const { name, email, phone, service, message } = data;

    // Validación básica
    if (!name || !email || !phone || !service) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
    }

    console.log(`Enviando correo de cita de ${name} a ivangdeveloper@gmail.com...`);

    // Enviar notificación a la dueña/administrador usando el dominio verificado
    const { data: adminEmailData, error: adminError } = await resend.emails.send({
      from: 'Citas Roxana Grimaldo <citas@roxanagrimaldo.com>',
      to: ['ivangdeveloper@gmail.com'],
      subject: `Nueva solicitud de cita - ${service}`,
      html: `
        <h1>Nueva solicitud de cita</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Servicio:</strong> ${service}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${(message || 'N/A').replace(/\n/g, '<br>')}</p>
      `
    });

    if (adminError) {
      console.error('Error de Resend al enviar correo:', adminError);
      return NextResponse.json({ error: adminError.message }, { status: 400 });
    }

    // Auto-respuesta al cliente
    try {
      await resend.emails.send({
        from: 'Roxana Grimaldo <citas@roxanagrimaldo.com>',
        to: [email],
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
    } catch (autoReplyErr) {
      console.warn('Advertencia: No se pudo enviar la auto-respuesta al cliente:', autoReplyErr);
    }

    return NextResponse.json({ success: true, data: adminEmailData });
  } catch (error) {
    console.error('Error en el servidor al enviar email:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
