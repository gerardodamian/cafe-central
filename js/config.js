/* =========================================
   CONFIGURACIÓN DEL NEGOCIO
   Personaliza esta información para cada cliente
========================================= */

const businessConfig = {
    // Información básica del negocio
    name: "Café Central",
    tagline: "El mejor café de la ciudad te espera",
    description: "Desde 1995, hemos sido el punto de encuentro favorito de la comunidad. Ofrecemos café de especialidad, repostería artesanal y un ambiente acogedor perfecto para trabajar, estudiar o compartir con amigos.",
    
    // Contacto
    contact: {
        phone: "+1 (234) 567-8900",
        email: "info@cafecentral.com",
        whatsapp: "1234567890", // Solo números
        website: "https://cafecentral.com"
    },
    
    // Ubicación
    location: {
        address: "Av. Principal 123",
        city: "Centro, Ciudad",
        zipCode: "CP 12345",
        fullAddress: "Av. Principal 123, Centro, Ciudad, CP 12345",
        coordinates: {
            lat: -34.6037,
            lng: -58.3816
        },
        googleMapsUrl: "https://maps.google.com/?q=-34.6037,-58.3816"
    },
    
    // Horarios (formato 24 horas)
    hours: {
        monday: { open: "07:00", close: "21:00", isOpen: true },
        tuesday: { open: "07:00", close: "21:00", isOpen: true },
        wednesday: { open: "07:00", close: "21:00", isOpen: true },
        thursday: { open: "07:00", close: "21:00", isOpen: true },
        friday: { open: "07:00", close: "21:00", isOpen: true },
        saturday: { open: "08:00", close: "22:00", isOpen: true },
        sunday: { open: "09:00", close: "20:00", isOpen: true }
    },
    
    // Redes sociales
    socialMedia: {
        facebook: "https://facebook.com/cafecentral",
        instagram: "https://instagram.com/cafecentral",
        whatsapp: "https://wa.me/1234567890?text=Hola,%20me%20gustaría%20más%20información",
        google: "https://g.page/cafecentral",
        twitter: "",
        linkedin: "",
        youtube: "",
        tiktok: ""
    },
    
    // Características especiales
    features: [
        { icon: "fas fa-wifi", text: "WiFi Gratis" },
        { icon: "fas fa-leaf", text: "Café Orgánico" },
        { icon: "fas fa-birthday-cake", text: "Repostería Casera" },
        { icon: "fas fa-parking", text: "Estacionamiento" }
    ],
    
    // Imágenes (rutas relativas o URLs)
    images: {
        hero: "assets/cafe-hero.jpg",
        interior: "assets/cafe-interior.jpg",
        logo: "assets/logo.png",
        favicon: "assets/favicon.ico"
    },
    
    // Colores del tema (opcional - sobrescribe CSS)
    theme: {
        primary: "#d4a574",
        primaryDark: "#b8935f",
        primaryLight: "#e8c4a0",
        secondary: "#2c3e50"
    },
    
    // Configuración de la página
    seo: {
        title: "Café Central - Tu lugar favorito",
        description: "El mejor café de la ciudad. Café de especialidad, repostería artesanal y ambiente acogedor en el corazón de la ciudad.",
        keywords: "café, coffee, repostería, desayuno, centro, wifi gratis",
        author: "Café Central"
    },
    
    // Transporte público cercano
    transport: [
        { icon: "fas fa-bus", text: "Líneas 10, 15, 32" },
        { icon: "fas fa-train", text: "Estación Central (2 cuadras)" }
    ],
    
    // Configuración adicional
    settings: {
        showRating: true,
        rating: 4.8,
        reviewCount: 250,
        enableQR: true,
        enableMap: true,
        enableShareButtons: true,
        language: "es"
    }
};

// Días de la semana en español
const daysOfWeek = {
    monday: "Lunes",
    tuesday: "Martes", 
    wednesday: "Miércoles",
    thursday: "Jueves",
    friday: "Viernes",
    saturday: "Sábado",
    sunday: "Domingo"
};

// Textos de la interfaz
const uiTexts = {
    es: {
        open: "Abierto ahora",
        closed: "Cerrado ahora",
        openingSoon: "Abre pronto",
        closingSoon: "Cierra pronto",
        copyAddress: "Dirección copiada",
        copyLink: "Enlace copiado",
        shareTitle: "Compartir Tarjeta Digital",
        loading: "Cargando...",
        error: "Error al cargar",
        getDirections: "Cómo llegar",
        callNow: "Llamar ahora",
        sendEmail: "Enviar email",
        chatWhatsApp: "Chatear por WhatsApp",
        viewOnMaps: "Ver en Google Maps"
    },
    en: {
        open: "Open now",
        closed: "Closed now", 
        openingSoon: "Opening soon",
        closingSoon: "Closing soon",
        copyAddress: "Address copied",
        copyLink: "Link copied",
        shareTitle: "Share Digital Card",
        loading: "Loading...",
        error: "Loading error",
        getDirections: "Get directions",
        callNow: "Call now",
        sendEmail: "Send email", 
        chatWhatsApp: "Chat on WhatsApp",
        viewOnMaps: "View on Google Maps"
    }
};

// Exportar configuración para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { businessConfig, daysOfWeek, uiTexts };
}
