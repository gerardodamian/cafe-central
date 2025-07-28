/* =========================================
   FUNCIONALIDAD PRINCIPAL
   JavaScript para la Tarjeta Digital de Comercio
========================================= */

class BusinessCard {
    constructor() {
        this.config = businessConfig;
        this.texts = uiTexts[this.config.settings.language] || uiTexts.es;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateBusinessInfo();
        this.updateBusinessHours();
        this.checkBusinessStatus();
        this.initializeMap();
        this.hideLoadingScreen();
        this.setupSmoothScrolling();
        this.setupMobileMenu();
        this.startStatusUpdateInterval();
    }

    /* =========================================
       EVENT LISTENERS
    ========================================= */
    setupEventListeners() {
        // Botón de compartir
        const shareBtn = document.getElementById('shareBtn');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => this.showQRModal());
        }

        // Botón de direcciones
        const directionsBtn = document.getElementById('directionsBtn');
        if (directionsBtn) {
            directionsBtn.addEventListener('click', () => this.openDirections());
        }

        // Botón copiar dirección
        const copyAddressBtn = document.getElementById('copyAddressBtn');
        if (copyAddressBtn) {
            copyAddressBtn.addEventListener('click', () => this.copyAddress());
        }

        // Modal QR
        const qrModal = document.getElementById('qrModal');
        const closeModal = document.querySelector('.close-modal');
        if (closeModal) {
            closeModal.addEventListener('click', () => this.hideQRModal());
        }
        if (qrModal) {
            qrModal.addEventListener('click', (e) => {
                if (e.target === qrModal) this.hideQRModal();
            });
        }

        // Botones del modal QR
        const downloadQR = document.getElementById('downloadQR');
        const copyLink = document.getElementById('copyLink');
        if (downloadQR) {
            downloadQR.addEventListener('click', () => this.downloadQR());
        }
        if (copyLink) {
            copyLink.addEventListener('click', () => this.copyWebsiteLink());
        }

        // Enlaces de redes sociales
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleSocialClick(e));
        });

        // Enlaces de contacto
        const contactLinks = document.querySelectorAll('.contact-link');
        contactLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleContactClick(e));
        });

        // Mapa placeholder
        const mapPlaceholder = document.querySelector('.map-placeholder');
        if (mapPlaceholder) {
            mapPlaceholder.addEventListener('click', () => this.openGoogleMaps());
        }

        // Tecla Escape para cerrar modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.hideQRModal();
        });
    }

    /* =========================================
       ACTUALIZACIÓN DE INFORMACIÓN
    ========================================= */
    updateBusinessInfo() {
        // Actualizar título de la página
        document.title = this.config.seo.title;
        
        // Actualizar meta descripción
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = this.config.seo.description;
        }

        // Actualizar nombre del negocio
        const businessNames = document.querySelectorAll('.business-name');
        businessNames.forEach(name => {
            name.textContent = this.config.name;
        });

        // Actualizar tagline
        const tagline = document.querySelector('.business-tagline');
        if (tagline) {
            tagline.textContent = this.config.tagline;
        }

        // Actualizar descripción
        const description = document.querySelector('.business-description');
        if (description) {
            description.textContent = this.config.description;
        }

        // Actualizar dirección
        const address = document.querySelector('.business-address');
        if (address) {
            address.innerHTML = `
                ${this.config.location.address}<br>
                ${this.config.location.city}<br>
                ${this.config.location.zipCode}
            `;
        }

        // Actualizar información de contacto
        this.updateContactInfo();

        // Actualizar características
        this.updateFeatures();

        // Actualizar transporte
        this.updateTransportInfo();

        // Actualizar rating si está habilitado
        if (this.config.settings.showRating) {
            this.updateRating();
        }

        // Actualizar logos
        this.updateLogos();
    }

    updateContactInfo() {
        // Teléfono
        const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
        phoneLinks.forEach(link => {
            link.href = `tel:${this.config.contact.phone}`;
            if (link.textContent.includes('+1')) {
                link.textContent = this.config.contact.phone;
            }
        });

        // Email
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        emailLinks.forEach(link => {
            link.href = `mailto:${this.config.contact.email}`;
            if (link.textContent.includes('@')) {
                link.textContent = this.config.contact.email;
            }
        });

        // WhatsApp
        const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
        whatsappLinks.forEach(link => {
            link.href = this.config.socialMedia.whatsapp;
        });
    }

    updateFeatures() {
        const featuresContainer = document.querySelector('.features');
        if (!featuresContainer || !this.config.features) return;

        featuresContainer.innerHTML = '';
        this.config.features.forEach(feature => {
            const featureElement = document.createElement('div');
            featureElement.className = 'feature';
            featureElement.innerHTML = `
                <i class="${feature.icon}"></i>
                <span>${feature.text}</span>
            `;
            featuresContainer.appendChild(featureElement);
        });
    }

    updateTransportInfo() {
        const transportList = document.querySelector('.transport-info ul');
        if (!transportList || !this.config.transport) return;

        transportList.innerHTML = '';
        this.config.transport.forEach(transport => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="${transport.icon}"></i> ${transport.text}`;
            transportList.appendChild(li);
        });
    }

    updateRating() {
        const ratingBadge = document.querySelector('.badge.rating');
        if (ratingBadge) {
            ratingBadge.innerHTML = `
                <i class="fas fa-star"></i> 
                ${this.config.settings.rating} (${this.config.settings.reviewCount}+ reseñas)
            `;
        }
    }

    updateLogos() {
        const logos = document.querySelectorAll('.nav-logo, .footer-logo');
        logos.forEach(logo => {
            const span = logo.querySelector('span');
            if (span) {
                span.textContent = this.config.name;
            }
        });
    }

    /* =========================================
       HORARIOS Y ESTADO DEL NEGOCIO
    ========================================= */
    updateBusinessHours() {
        const hoursGrid = document.getElementById('businessHours');
        if (!hoursGrid) return;

        hoursGrid.innerHTML = '';
        
        // Agrupar días consecutivos con los mismos horarios
        const groupedHours = this.groupConsecutiveDays();
        
        groupedHours.forEach(group => {
            const hourItem = document.createElement('div');
            hourItem.className = 'hour-item';
            
            if (this.isCurrentDayGroup(group.days)) {
                hourItem.classList.add('current-day');
            }
            
            const dayText = group.label;
            const timeText = group.hours.isOpen 
                ? `${this.formatTime(group.hours.open)} - ${this.formatTime(group.hours.close)}`
                : 'Cerrado';
            
            hourItem.innerHTML = `
                <span class="day">${dayText}</span>
                <span class="time">${timeText}</span>
            `;
            
            hoursGrid.appendChild(hourItem);
        });
    }

    groupConsecutiveDays() {
        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        const groups = [];
        let currentGroup = null;

        days.forEach(day => {
            const hours = this.config.hours[day];
            const hoursString = hours.isOpen ? `${hours.open}-${hours.close}` : 'closed';

            if (!currentGroup || currentGroup.hoursString !== hoursString) {
                if (currentGroup) {
                    groups.push(this.finalizeGroup(currentGroup));
                }
                currentGroup = {
                    days: [day],
                    hours: hours,
                    hoursString: hoursString
                };
            } else {
                currentGroup.days.push(day);
            }
        });

        if (currentGroup) {
            groups.push(this.finalizeGroup(currentGroup));
        }

        return groups;
    }

    finalizeGroup(group) {
        let label;
        if (group.days.length === 1) {
            label = daysOfWeek[group.days[0]];
        } else if (group.days.length === 2) {
            label = `${daysOfWeek[group.days[0]]} - ${daysOfWeek[group.days[group.days.length - 1]]}`;
        } else {
            label = `${daysOfWeek[group.days[0]]} - ${daysOfWeek[group.days[group.days.length - 1]]}`;
        }

        return {
            days: group.days,
            hours: group.hours,
            label: label
        };
    }

    isCurrentDayGroup(days) {
        const today = this.getCurrentDay();
        return days.includes(today);
    }

    getCurrentDay() {
        const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        return dayNames[new Date().getDay()];
    }

    formatTime(time) {
        const [hours, minutes] = time.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        return `${displayHour}:${minutes} ${ampm}`;
    }

    checkBusinessStatus() {
        const today = this.getCurrentDay();
        const todayHours = this.config.hours[today];
        const statusBadge = document.getElementById('statusBadge');
        
        if (!statusBadge || !todayHours) return;

        const now = new Date();
        const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        let status, statusClass, statusText;

        if (!todayHours.isOpen) {
            status = 'closed';
            statusClass = 'closed';
            statusText = this.texts.closed;
        } else {
            const openTime = todayHours.open;
            const closeTime = todayHours.close;
            
            if (currentTime >= openTime && currentTime < closeTime) {
                // Verificar si está por cerrar (1 hora antes)
                const oneHourBeforeClose = this.subtractHours(closeTime, 1);
                if (currentTime >= oneHourBeforeClose) {
                    status = 'closing-soon';
                    statusClass = 'open';
                    statusText = this.texts.closingSoon;
                } else {
                    status = 'open';
                    statusClass = 'open';
                    statusText = this.texts.open;
                }
            } else if (currentTime < openTime) {
                // Verificar si abre pronto (1 hora antes)
                const oneHourBeforeOpen = this.subtractHours(openTime, 1);
                if (currentTime >= oneHourBeforeOpen) {
                    status = 'opening-soon';
                    statusClass = 'closed';
                    statusText = this.texts.openingSoon;
                } else {
                    status = 'closed';
                    statusClass = 'closed';
                    statusText = this.texts.closed;
                }
            } else {
                status = 'closed';
                statusClass = 'closed';
                statusText = this.texts.closed;
            }
        }

        statusBadge.className = `badge ${statusClass}`;
        statusBadge.innerHTML = `<i class="fas fa-clock"></i> ${statusText}`;
    }

    subtractHours(timeString, hours) {
        const [h, m] = timeString.split(':').map(Number);
        const date = new Date();
        date.setHours(h, m, 0, 0);
        date.setHours(date.getHours() - hours);
        return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    }

    startStatusUpdateInterval() {
        // Actualizar estado cada 5 minutos
        setInterval(() => {
            this.checkBusinessStatus();
        }, 5 * 60 * 1000);
    }

    /* =========================================
       FUNCIONALIDADES INTERACTIVAS
    ========================================= */
    showQRModal() {
        const modal = document.getElementById('qrModal');
        if (!modal) return;

        modal.classList.add('show');
        this.generateQRCode();
    }

    hideQRModal() {
        const modal = document.getElementById('qrModal');
        if (modal) {
            modal.classList.remove('show');
        }
    }

    generateQRCode() {
        const canvas = document.getElementById('qrcode');
        if (!canvas) return;

        const url = window.location.href;
        
        QRCode.toCanvas(canvas, url, {
            width: 200,
            height: 200,
            colorDark: this.config.theme.secondary,
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.M
        }, (error) => {
            if (error) {
                console.error('Error generating QR code:', error);
            }
        });
    }

    downloadQR() {
        const canvas = document.getElementById('qrcode');
        if (!canvas) return;

        const link = document.createElement('a');
        link.download = `${this.config.name.toLowerCase().replace(/\s+/g, '-')}-qr.png`;
        link.href = canvas.toDataURL();
        link.click();
    }

    copyWebsiteLink() {
        const url = window.location.href;
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(url).then(() => {
                this.showToast(this.texts.copyLink);
            });
        } else {
            // Fallback para navegadores antiguos
            const textarea = document.createElement('textarea');
            textarea.value = url;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            this.showToast(this.texts.copyLink);
        }
    }

    copyAddress() {
        const address = this.config.location.fullAddress;
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(address).then(() => {
                this.showToast(this.texts.copyAddress);
            });
        } else {
            const textarea = document.createElement('textarea');
            textarea.value = address;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            this.showToast(this.texts.copyAddress);
        }
    }

    openDirections() {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(this.config.location.fullAddress)}`;
        window.open(url, '_blank');
    }

    openGoogleMaps() {
        window.open(this.config.location.googleMapsUrl, '_blank');
    }

    /* =========================================
       MANEJO DE ENLACES SOCIALES Y CONTACTO
    ========================================= */
    handleSocialClick(e) {
        e.preventDefault();
        const platform = e.currentTarget.dataset.platform;
        const url = this.config.socialMedia[platform];
        
        if (url) {
            window.open(url, '_blank');
        }
    }

    handleContactClick(e) {
        const href = e.currentTarget.getAttribute('href');
        
        // Analytics tracking (si se implementa)
        if (href.startsWith('tel:')) {
            this.trackEvent('contact', 'phone_call');
        } else if (href.startsWith('mailto:')) {
            this.trackEvent('contact', 'email');
        } else if (href.includes('wa.me')) {
            this.trackEvent('contact', 'whatsapp');
        }
    }

    /* =========================================
       NAVEGACIÓN Y UI
    ========================================= */
    setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Cerrar menú móvil si está abierto
                    this.closeMobileMenu();
                    
                    // Actualizar enlaces activos
                    this.updateActiveNavLink(link);
                }
            });
        });

        // Scroll spy para actualizar enlaces activos
        window.addEventListener('scroll', () => {
            this.updateActiveNavLinks();
        });
    }

    setupMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Cerrar menú al hacer clic en un enlace
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMobileMenu();
                });
            });
        }
    }

    closeMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }

    updateActiveNavLink(activeLink) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }

    updateActiveNavLinks() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    /* =========================================
       MAPA
    ========================================= */
    initializeMap() {
        // En una implementación real, aquí inicializarías Google Maps
        // Por ahora, solo configuramos el enlace del placeholder
        const mapPlaceholder = document.querySelector('.map-placeholder');
        if (mapPlaceholder) {
            mapPlaceholder.style.cursor = 'pointer';
        }
    }

    /* =========================================
       UTILIDADES
    ========================================= */
    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading');
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 1000);
        }
    }

    showToast(message) {
        // Crear elemento toast
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--gray-800);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        // Mostrar toast
        setTimeout(() => {
            toast.style.opacity = '1';
        }, 100);
        
        // Ocultar y remover toast
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 2000);
    }

    trackEvent(category, action, label = '') {
        // Función para tracking de analytics (Google Analytics, etc.)
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: category,
                event_label: label
            });
        }
        
        console.log(`Analytics: ${category} - ${action} - ${label}`);
    }
}

/* =========================================
   INICIALIZACIÓN
========================================= */
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar la aplicación
    const businessCard = new BusinessCard();
    
    // Hacer disponible globalmente para debugging
    window.businessCard = businessCard;
    
    console.log('Tarjeta Digital de Comercio inicializada correctamente');
});
