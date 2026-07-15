document.addEventListener('DOMContentLoaded', () => {
    console.log("Tech portfolio succesvol geladen. System operational.");


    // MOUSE GLOW COORDINATES INJECTOR
    document.addEventListener('mousemove', (e) => {
        document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
        document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    });


    // CONTACT FORM HANDLER
    const contactForm = document.getElementById('portfolio-contact-form');
    const statusMessage = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('form-name').value;

            statusMessage.textContent = "Systeem: Bericht wordt verzonden...";
            statusMessage.className = "form-status-message";

            setTimeout(() => {
                statusMessage.textContent = `> Succes: Bedankt voor je bericht, ${name}! Systeem heeft data ontvangen.`;
                statusMessage.classList.add('success');
                contactForm.reset();
            }, 1000);
        });
    }


    // HAMBURGER MENU CONTROLLER
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

            menuToggle.setAttribute('aria-expanded', !isExpanded);
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');

            document.body.style.overflow = isExpanded ? '' : 'hidden';
        });

        const menuLinks = navMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }


    // ACTIVE PAGE DETECTOR (navigatie highlight)
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').replace('./', '');
        link.classList.toggle('active', linkPage === currentPage);
    });


    // BOOT SEQUENCE CONTROLLER
    const bootScreen = document.getElementById('boot-screen');

    if (bootScreen) {
        const hasBooted = sessionStorage.getItem('hasBooted');

        if (hasBooted) {
            // Al eerder gezien in deze sessie: overlay meteen verbergen, geen animatie
            bootScreen.classList.add('hidden');
        } else {
            // Eerste bezoek: toon de boot-sequence en onthoud dit voor de rest van de sessie
            setTimeout(() => {
                bootScreen.classList.add('hidden');
            }, 1600);
            sessionStorage.setItem('hasBooted', 'true');
        }
    }

    // TYPEWRITER EFFECT
    const typewriterEl = document.getElementById('typewriter-text');

    if (typewriterEl) {
        const fullText = typewriterEl.getAttribute('data-full-text');
        let charIndex = 0;

        const startTyping = () => {
            typewriterEl.classList.add('typing');

            const typeChar = () => {
                if (charIndex < fullText.length) {
                    typewriterEl.textContent = fullText.slice(0, charIndex + 1);
                    charIndex++;
                    setTimeout(typeChar, 20);
                } else {
                    setTimeout(() => {
                        typewriterEl.classList.remove('typing');
                    }, 1500);
                }
            };

            typeChar();
        };

        const hasBooted = sessionStorage.getItem('hasBooted');
        const startDelay = hasBooted ? 200 : 1700;

        setTimeout(startTyping, startDelay);
    }

    /* SCROLL PROGRESS BAR */
    const scrollProgress = document.getElementById('scroll-progress');

    if (scrollProgress) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            scrollProgress.style.width = `${scrollPercent}%`;
        });
    }

    /* BACK TO TOP BUTTON */
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});