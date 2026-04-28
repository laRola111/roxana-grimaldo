export const dictionaries = {
  en: {
    nav: {
      services: "Services",
      about: "About Me",
      testimonials: "Testimonials",
      contact: "Book Now",
    },
    hero: {
      title: "Reveal Your True Radiance",
      subtitle: "Experience luxury skincare and advanced aesthetic treatments tailored for your unique beauty.",
      cta: "Book Appointment",
      secondary: "Explore Services",
    },
    services: {
      title: "Premium Treatments",
      subtitle: "Elevate your beauty routine with our signature services",
      items: [
        {
          id: "facial",
          title: "Signature Glow Facial",
          description: "A customized facial treatment designed to deeply cleanse, exfoliate, and hydrate your skin.",
          price: "From $120",
          duration: "60 min",
        },
        {
          id: "sculpting",
          title: "Body Sculpting",
          description: "Non-invasive body contouring to help you achieve your desired silhouette.",
          price: "From $200",
          duration: "90 min",
        },
        {
          id: "laser",
          title: "Laser Hair Removal",
          description: "Safe and effective laser hair reduction for smooth, flawless skin.",
          price: "From $85",
          duration: "Varies",
        },
      ],
    },
    about: {
      title: "Meet Roxana",
      subtitle: "Licensed Aesthetician & Skincare Expert",
      content: "With years of experience in advanced aesthetics, Roxana Grimaldo is dedicated to helping clients achieve their ultimate skin goals. Combining luxurious techniques with cutting-edge technology, every treatment is a step towards your most confident self.",
      stats: [
        { label: "Happy Clients", value: "500+" },
        { label: "Years Experience", value: "8+" },
        { label: "Certifications", value: "15+" },
      ],
    },
    contact: {
      title: "Book Your Experience",
      subtitle: "Reserve your time for ultimate relaxation and rejuvenation.",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        service: "Select Service",
        message: "Special Requests (Optional)",
        submit: "Request Appointment",
        submitting: "Sending...",
        success: "Your request has been received. We will contact you shortly!",
        error: "Something went wrong. Please try again or contact us via WhatsApp.",
      },
      whatsapp: "Chat on WhatsApp",
    },
    footer: {
      rights: "All rights reserved.",
      address: "123 Luxury Ave, Miami, FL 33130",
    }
  },
  es: {
    nav: {
      services: "Servicios",
      about: "Sobre Mí",
      testimonials: "Testimonios",
      contact: "Reservar",
    },
    hero: {
      title: "Revela tu Verdadera Radiancia",
      subtitle: "Experimenta el cuidado de la piel de lujo y tratamientos estéticos avanzados diseñados para tu belleza única.",
      cta: "Agendar Cita",
      secondary: "Ver Servicios",
    },
    services: {
      title: "Tratamientos Premium",
      subtitle: "Eleva tu rutina de belleza con nuestros servicios exclusivos",
      items: [
        {
          id: "facial",
          title: "Facial Resplandor",
          description: "Un tratamiento facial personalizado diseñado para limpiar profundamente, exfoliar e hidratar tu piel.",
          price: "Desde $120",
          duration: "60 min",
        },
        {
          id: "sculpting",
          title: "Escultura Corporal",
          description: "Contorno corporal no invasivo para ayudarte a lograr la silueta deseada.",
          price: "Desde $200",
          duration: "90 min",
        },
        {
          id: "laser",
          title: "Depilación Láser",
          description: "Reducción de vello segura y efectiva para una piel suave e impecable.",
          price: "Desde $85",
          duration: "Varía",
        },
      ],
    },
    about: {
      title: "Conoce a Roxana",
      subtitle: "Esteticista Licenciada y Experta en Piel",
      content: "Con años de experiencia en estética avanzada, Roxana Grimaldo se dedica a ayudar a sus clientes a lograr sus objetivos de piel. Combinando técnicas lujosas con tecnología de punta, cada tratamiento es un paso hacia tu yo más seguro.",
      stats: [
        { label: "Clientes Felices", value: "500+" },
        { label: "Años de Experiencia", value: "8+" },
        { label: "Certificaciones", value: "15+" },
      ],
    },
    contact: {
      title: "Reserva tu Experiencia",
      subtitle: "Reserva tu tiempo para la máxima relajación y rejuvenecimiento.",
      form: {
        name: "Nombre Completo",
        email: "Correo Electrónico",
        phone: "Número de Teléfono",
        service: "Seleccionar Servicio",
        message: "Peticiones Especiales (Opcional)",
        submit: "Solicitar Cita",
        submitting: "Enviando...",
        success: "¡Tu solicitud ha sido recibida! Nos pondremos en contacto pronto.",
        error: "Algo salió mal. Por favor intenta de nuevo o contáctanos vía WhatsApp.",
      },
      whatsapp: "Chat por WhatsApp",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      address: "123 Luxury Ave, Miami, FL 33130",
    }
  }
};

export type Language = 'en' | 'es';
export type Dictionary = typeof dictionaries.en;
