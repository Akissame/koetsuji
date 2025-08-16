document.querySelector( "#retrobg-sun" ).onclick = () => {
	document.querySelector( "#retrobg" ).classList.toggle( "retrobg-shutdown" );

};

// JavaScript para el menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle del menú hamburguesa
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Cerrar menú al hacer click en un enlace (móvil)
        document.querySelectorAll('.nav-link').forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Cerrar menú al hacer click fuera de él
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Efecto de parallax suave para las estrellas
    const stars = document.querySelectorAll('.retrobg-star');
    if (stars.length > 0) {
        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX / window.innerWidth;
            mouseY = e.clientY / window.innerHeight;

            stars.forEach(function(star, index) {
                const speed = (index % 3 + 1) * 0.5;
                const x = (mouseX - 0.5) * speed;
                const y = (mouseY - 0.5) * speed;
                
                star.style.transform = `translate(${x}px, ${y}px) scale(${star.style.transform.match(/scale\(([^)]+)\)/)?.[1] || 1})`;
            });
        });
    }

    // Efecto de glow en los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            this.style.boxShadow = '0 0 20px rgba(209, 0, 177, 0.5)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });

    // Animación del logo en el hover
    const logoLink = document.querySelector('.nav-logo a');
    if (logoLink) {
        logoLink.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        logoLink.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Scroll suave para la navegación
    const navLinksInternal = document.querySelectorAll('a[href^="#"]');
    navLinksInternal.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Highlighting del enlace activo basado en la URL
    function setActiveLink() {
        const currentPath = window.location.pathname;
        const currentPage = currentPath.split('/').pop() || 'index.html';
        
        navLinks.forEach(function(link) {
            const linkPath = link.getAttribute('href');
            const linkPage = linkPath.split('/').pop();
            
            if (linkPage === currentPage || 
                (currentPage === '' && linkPath === '/') ||
                (currentPage === 'index.html' && linkPath === '/')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Establecer enlace activo al cargar la página
    setActiveLink();

    // Actualizar enlace activo cuando cambie la URL (para SPAs)
    window.addEventListener('popstate', setActiveLink);
});

// Función para crear efecto de partículas adicionales (opcional)
function createStars() {
    const starsContainer = document.getElementById('retrobg-stars');
    if (!starsContainer) return;

    // Agregar más estrellas dinámicamente
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.className = 'retrobg-star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.transform = `scale(${Math.random() * 2 + 0.5})`;
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite alternate`;
        starsContainer.appendChild(star);
    }
}

// Crear animación de twinkle para las estrellas
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0% { opacity: 0.3; }
        100% { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Inicializar estrellas adicionales después de que se cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(createStars, 1000);
});
