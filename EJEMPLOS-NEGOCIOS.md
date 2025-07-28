# 🏪 Ejemplos de Configuración para Diferentes Negocios

Aquí tienes configuraciones listas para diferentes tipos de negocios. Solo copia y pega en `js/config.js`.

## ☕ CAFETERÍA / RESTAURANTE

```javascript
const businessConfig = {
    name: "Café Central",
    tagline: "El mejor café de la ciudad te espera",
    description: "Desde 1995, hemos sido el punto de encuentro favorito de la comunidad. Ofrecemos café de especialidad, repostería artesanal y un ambiente acogedor perfecto para trabajar, estudiar o compartir con amigos.",
    
    contact: {
        phone: "+1 (234) 567-8900",
        email: "info@cafecentral.com",
        whatsapp: "1234567890"
    },
    
    hours: {
        monday: { open: "07:00", close: "21:00", isOpen: true },
        tuesday: { open: "07:00", close: "21:00", isOpen: true },
        wednesday: { open: "07:00", close: "21:00", isOpen: true },
        thursday: { open: "07:00", close: "21:00", isOpen: true },
        friday: { open: "07:00", close: "21:00", isOpen: true },
        saturday: { open: "08:00", close: "22:00", isOpen: true },
        sunday: { open: "09:00", close: "20:00", isOpen: true }
    },
    
    features: [
        { icon: "fas fa-wifi", text: "WiFi Gratis" },
        { icon: "fas fa-leaf", text: "Café Orgánico" },
        { icon: "fas fa-birthday-cake", text: "Repostería Casera" },
        { icon: "fas fa-parking", text: "Estacionamiento" }
    ],
    
    theme: {
        primary: "#d4a574",
        primaryDark: "#b8935f",
        primaryLight: "#e8c4a0",
        secondary: "#2c3e50"
    }
};
```

## 💇 SALÓN DE BELLEZA

```javascript
const businessConfig = {
    name: "Belleza Total",
    tagline: "Tu belleza es nuestra pasión",
    description: "Salón de belleza especializado en cortes modernos, coloración, tratamientos capilares y cuidado facial. Nuestro equipo de profesionales te ayudará a lucir espectacular en cualquier ocasión.",
    
    contact: {
        phone: "+1 (234) 567-8901",
        email: "citas@bellezatotal.com",
        whatsapp: "1234567891"
    },
    
    hours: {
        monday: { open: "09:00", close: "19:00", isOpen: true },
        tuesday: { open: "09:00", close: "19:00", isOpen: true },
        wednesday: { open: "09:00", close: "19:00", isOpen: true },
        thursday: { open: "09:00", close: "19:00", isOpen: true },
        friday: { open: "09:00", close: "20:00", isOpen: true },
        saturday: { open: "08:00", close: "18:00", isOpen: true },
        sunday: { open: "00:00", close: "00:00", isOpen: false }
    },
    
    features: [
        { icon: "fas fa-cut", text: "Cortes Modernos" },
        { icon: "fas fa-palette", text: "Coloración Expert" },
        { icon: "fas fa-spa", text: "Tratamientos Faciales" },
        { icon: "fas fa-calendar-check", text: "Citas Online" }
    ],
    
    theme: {
        primary: "#e91e63",
        primaryDark: "#c2185b",
        primaryLight: "#f8bbd9",
        secondary: "#37474f"
    }
};
```

## 🏥 CONSULTORIO MÉDICO

```javascript
const businessConfig = {
    name: "Dr. García - Medicina General",
    tagline: "Tu salud en las mejores manos",
    description: "Consultorio de medicina general con más de 15 años de experiencia. Ofrecemos atención médica integral, chequeos preventivos y seguimiento de enfermedades crónicas en un ambiente cálido y profesional.",
    
    contact: {
        phone: "+1 (234) 567-8902",
        email: "consultas@drgarcia.com",
        whatsapp: "1234567892"
    },
    
    hours: {
        monday: { open: "08:00", close: "17:00", isOpen: true },
        tuesday: { open: "08:00", close: "17:00", isOpen: true },
        wednesday: { open: "08:00", close: "17:00", isOpen: true },
        thursday: { open: "08:00", close: "17:00", isOpen: true },
        friday: { open: "08:00", close: "16:00", isOpen: true },
        saturday: { open: "09:00", close: "13:00", isOpen: true },
        sunday: { open: "00:00", close: "00:00", isOpen: false }
    },
    
    features: [
        { icon: "fas fa-stethoscope", text: "Consulta General" },
        { icon: "fas fa-heart", text: "Chequeos Preventivos" },
        { icon: "fas fa-prescription", text: "Seguimiento Médico" },
        { icon: "fas fa-shield-alt", text: "Obras Sociales" }
    ],
    
    theme: {
        primary: "#2196f3",
        primaryDark: "#1976d2",
        primaryLight: "#bbdefb",
        secondary: "#263238"
    }
};
```

## 🔧 TALLER MECÁNICO

```javascript
const businessConfig = {
    name: "AutoService Pro",
    tagline: "Expertos en mantener tu auto en perfecto estado",
    description: "Taller mecánico especializado en mantenimiento preventivo, reparaciones y diagnóstico automotriz. Contamos con tecnología de punta y mecánicos certificados para cuidar tu vehículo.",
    
    contact: {
        phone: "+1 (234) 567-8903",
        email: "servicio@autoservicepro.com",
        whatsapp: "1234567893"
    },
    
    hours: {
        monday: { open: "08:00", close: "18:00", isOpen: true },
        tuesday: { open: "08:00", close: "18:00", isOpen: true },
        wednesday: { open: "08:00", close: "18:00", isOpen: true },
        thursday: { open: "08:00", close: "18:00", isOpen: true },
        friday: { open: "08:00", close: "18:00", isOpen: true },
        saturday: { open: "08:00", close: "15:00", isOpen: true },
        sunday: { open: "00:00", close: "00:00", isOpen: false }
    },
    
    features: [
        { icon: "fas fa-wrench", text: "Reparaciones" },
        { icon: "fas fa-oil-can", text: "Cambio de Aceite" },
        { icon: "fas fa-cog", text: "Diagnóstico" },
        { icon: "fas fa-tools", text: "Mantenimiento" }
    ],
    
    theme: {
        primary: "#ff9800",
        primaryDark: "#f57c00",
        primaryLight: "#ffe0b2",
        secondary: "#424242"
    }
};
```

## 🛍️ TIENDA DE ROPA

```javascript
const businessConfig = {
    name: "Moda Chic",
    tagline: "La moda que buscas está aquí",
    description: "Boutique especializada en ropa femenina moderna y elegante. Contamos con las últimas tendencias de la moda, desde casual hasta elegante, para que siempre luzcas espectacular.",
    
    contact: {
        phone: "+1 (234) 567-8904",
        email: "ventas@modachic.com",
        whatsapp: "1234567894"
    },
    
    hours: {
        monday: { open: "10:00", close: "20:00", isOpen: true },
        tuesday: { open: "10:00", close: "20:00", isOpen: true },
        wednesday: { open: "10:00", close: "20:00", isOpen: true },
        thursday: { open: "10:00", close: "20:00", isOpen: true },
        friday: { open: "10:00", close: "21:00", isOpen: true },
        saturday: { open: "09:00", close: "21:00", isOpen: true },
        sunday: { open: "11:00", close: "18:00", isOpen: true }
    },
    
    features: [
        { icon: "fas fa-tshirt", text: "Últimas Tendencias" },
        { icon: "fas fa-tags", text: "Precios Accesibles" },
        { icon: "fas fa-exchange-alt", text: "Cambios y Devoluciones" },
        { icon: "fas fa-credit-card", text: "Todos los Medios de Pago" }
    ],
    
    theme: {
        primary: "#9c27b0",
        primaryDark: "#7b1fa2",
        primaryLight: "#e1bee7",
        secondary: "#4a148c"
    }
};
```

## 🏋️ GIMNASIO

```javascript
const businessConfig = {
    name: "FitCenter Gym",
    tagline: "Transforma tu cuerpo, transforma tu vida",
    description: "Gimnasio moderno con equipamiento de última generación, clases grupales, entrenadores personalizados y planes nutricionales. Tu bienestar es nuestra prioridad.",
    
    contact: {
        phone: "+1 (234) 567-8905",
        email: "info@fitcentergym.com",
        whatsapp: "1234567895"
    },
    
    hours: {
        monday: { open: "06:00", close: "22:00", isOpen: true },
        tuesday: { open: "06:00", close: "22:00", isOpen: true },
        wednesday: { open: "06:00", close: "22:00", isOpen: true },
        thursday: { open: "06:00", close: "22:00", isOpen: true },
        friday: { open: "06:00", close: "22:00", isOpen: true },
        saturday: { open: "07:00", close: "20:00", isOpen: true },
        sunday: { open: "08:00", close: "18:00", isOpen: true }
    },
    
    features: [
        { icon: "fas fa-dumbbell", text: "Equipos Modernos" },
        { icon: "fas fa-users", text: "Clases Grupales" },
        { icon: "fas fa-user-tie", text: "Entrenadores" },
        { icon: "fas fa-apple-alt", text: "Planes Nutricionales" }
    ],
    
    theme: {
        primary: "#4caf50",
        primaryDark: "#388e3c",
        primaryLight: "#c8e6c9",
        secondary: "#1b5e20"
    }
};
```

## 🍰 PASTELERÍA

```javascript
const businessConfig = {
    name: "Dulce Encanto",
    tagline: "Endulzamos tus momentos especiales",
    description: "Pastelería artesanal especializada en tortas personalizadas, cupcakes, postres gourmet y productos de panadería. Cada creación está hecha con amor y los mejores ingredientes.",
    
    contact: {
        phone: "+1 (234) 567-8906",
        email: "pedidos@dulceencanto.com",
        whatsapp: "1234567896"
    },
    
    hours: {
        monday: { open: "08:00", close: "19:00", isOpen: true },
        tuesday: { open: "08:00", close: "19:00", isOpen: true },
        wednesday: { open: "08:00", close: "19:00", isOpen: true },
        thursday: { open: "08:00", close: "19:00", isOpen: true },
        friday: { open: "08:00", close: "20:00", isOpen: true },
        saturday: { open: "08:00", close: "20:00", isOpen: true },
        sunday: { open: "09:00", close: "17:00", isOpen: true }
    },
    
    features: [
        { icon: "fas fa-birthday-cake", text: "Tortas Personalizadas" },
        { icon: "fas fa-cookie-bite", text: "Productos Artesanales" },
        { icon: "fas fa-heart", text: "Eventos Especiales" },
        { icon: "fas fa-truck", text: "Delivery Gratis" }
    ],
    
    theme: {
        primary: "#ff6b6b",
        primaryDark: "#ee5a52",
        primaryLight: "#ffb3ba",
        secondary: "#2d3436"
    }
};
```

## 🐕 VETERINARIA

```javascript
const businessConfig = {
    name: "Clínica Veterinaria Amistad",
    tagline: "Cuidamos a tu mejor amigo",
    description: "Clínica veterinaria integral con servicios de consulta, cirugía, vacunación, peluquería canina y internación. Contamos con veterinarios especializados y tecnología avanzada para el cuidado de tu mascota.",
    
    contact: {
        phone: "+1 (234) 567-8907",
        email: "citas@vetamistad.com",
        whatsapp: "1234567897"
    },
    
    hours: {
        monday: { open: "08:00", close: "20:00", isOpen: true },
        tuesday: { open: "08:00", close: "20:00", isOpen: true },
        wednesday: { open: "08:00", close: "20:00", isOpen: true },
        thursday: { open: "08:00", close: "20:00", isOpen: true },
        friday: { open: "08:00", close: "20:00", isOpen: true },
        saturday: { open: "09:00", close: "18:00", isOpen: true },
        sunday: { open: "10:00", close: "16:00", isOpen: true }
    },
    
    features: [
        { icon: "fas fa-stethoscope", text: "Consultas Generales" },
        { icon: "fas fa-syringe", text: "Vacunación" },
        { icon: "fas fa-cut", text: "Peluquería Canina" },
        { icon: "fas fa-ambulance", text: "Emergencias 24h" }
    ],
    
    theme: {
        primary: "#00bcd4",
        primaryDark: "#0097a7",
        primaryLight: "#b2ebf2",
        secondary: "#004d40"
    }
};
```

## 📚 LIBRERÍA

```javascript
const businessConfig = {
    name: "Librería El Saber",
    tagline: "Un mundo de conocimiento te espera",
    description: "Librería especializada en literatura, textos educativos, material de oficina y artículos de regalo. Contamos con un amplio catálogo y servicio de pedidos especiales para encontrar cualquier libro que necesites.",
    
    contact: {
        phone: "+1 (234) 567-8908",
        email: "consultas@libreriasaber.com",
        whatsapp: "1234567898"
    },
    
    hours: {
        monday: { open: "09:00", close: "19:00", isOpen: true },
        tuesday: { open: "09:00", close: "19:00", isOpen: true },
        wednesday: { open: "09:00", close: "19:00", isOpen: true },
        thursday: { open: "09:00", close: "19:00", isOpen: true },
        friday: { open: "09:00", close: "19:00", isOpen: true },
        saturday: { open: "09:00", close: "18:00", isOpen: true },
        sunday: { open: "00:00", close: "00:00", isOpen: false }
    },
    
    features: [
        { icon: "fas fa-book", text: "Amplio Catálogo" },
        { icon: "fas fa-graduation-cap", text: "Textos Educativos" },
        { icon: "fas fa-search", text: "Pedidos Especiales" },
        { icon: "fas fa-gift", text: "Artículos de Regalo" }
    ],
    
    theme: {
        primary: "#795548",
        primaryDark: "#5d4037",
        primaryLight: "#d7ccc8",
        secondary: "#3e2723"
    }
};
```

---

## 📝 Instrucciones de Uso

1. **Elige** el ejemplo que más se parezca al negocio de tu cliente
2. **Copia** toda la configuración
3. **Pega** en el archivo `js/config.js` (reemplaza todo el contenido)
4. **Personaliza** los datos específicos del cliente:
   - Nombre del negocio
   - Información de contacto
   - Dirección y coordenadas
   - Horarios específicos
   - Enlaces de redes sociales
5. **Ajusta** las características si es necesario
6. **Cambia** los colores del tema si el cliente lo solicita

## 🎨 Paletas de Colores Adicionales

### Elegante
```css
primary: "#2c3e50"
primaryDark: "#1a252f"
primaryLight: "#34495e"
```

### Vibrante
```css
primary: "#e74c3c"
primaryDark: "#c0392b"
primaryLight: "#f1948a"
```

### Natural
```css
primary: "#27ae60"
primaryDark: "#229954"
primaryLight: "#58d68d"
```

### Profesional
```css
primary: "#34495e"
primaryDark: "#2c3e50"
primaryLight: "#5d6d7e"
```

---

**💡 Tip**: Siempre pregunta al cliente si tiene colores corporativos específicos antes de usar los colores por defecto.
