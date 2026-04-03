// REVEAL ON SCROLL - Intersection Observer (Máxima fluidez)
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.15 });

// WHATSAPP DINÁMICO
function initWhatsApp() {
    const whatsappBtn = document.getElementById("whatsappBtn");
    function actualizarMensaje() {
        const scrollY = window.scrollY;
        const portafolio = document.getElementById("portafolio")?.offsetTop || 0;
        const contacto = document.getElementById("contacto")?.offsetTop || 0;

        let mensaje = "Hola AriGoDev, me interesa una página web profesional";
        if (scrollY >= contacto - 200) {
            mensaje = "Hola Frank, quiero iniciar mi proyecto web ahora mismo";
        } else if (scrollY >= portafolio - 200) {
            mensaje = "Hola, vi los rubros que manejas y me gustaría una cotización";
        }
        whatsappBtn.href = `https://wa.me/51989195177?text=${encodeURIComponent(mensaje)}`;
    }
    window.addEventListener("scroll", actualizarMensaje, { passive: true });
}

// INICIALIZACIÓN
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    initWhatsApp();
});