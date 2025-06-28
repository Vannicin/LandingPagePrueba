document.addEventListener('DOMContentLoaded', function() {
    // ======================
    // Scroll Effects for Header
    // ======================
    const header = document.querySelector('.header');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        animateOnScroll(); // Activar animaciones al hacer scroll
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al cargar la página

    // ======================
    // Smooth Scrolling for Navigation
    // ======================
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Actualizar la URL sin recargar
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                }
            }
        });
    });

    // ======================
    // FAQ Accordion Functionality
    // ======================
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Cerrar todos los items primero
                faqItems.forEach(faq => {
                    faq.classList.remove('active');
                });
                
                // Abrir el item clickeado si no estaba activo
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }

    // ======================
    // Scroll Animations
    // ======================
    function animateOnScroll() {
        const elements = document.querySelectorAll('.benefit-card, .testimonial-card, .offer-card');
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.85;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            
            if (elementPosition < triggerPoint) {
                element.classList.add('animate');
            }
        });
    }

    // ======================
    // Additional Interactive Elements
    // ======================
    
    // Efecto hover para botones (mejora visual)
    const buttons = document.querySelectorAll('.btn, .nav-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });

    // ======================
    // Modal de contacto
    // ======================
    const comprarBtn = document.getElementById('comprarBtn');
    const modal = document.getElementById('contactModal');
    const closeModal = document.querySelector('.close-modal');

    if (comprarBtn && modal) {
        comprarBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    const whatsappBtn = document.querySelector('.whatsapp-btn');
    const telegramBtn = document.querySelector('.telegram-btn');

    if (whatsappBtn) {
        whatsappBtn.href = 'https://wa.me/51900112022'; 
    }

    if (telegramBtn) {
        telegramBtn.href = 'https://t.me/Giovanni12022'; 
}
});