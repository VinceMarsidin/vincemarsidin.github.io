document.addEventListener('DOMContentLoaded', () => {
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

    /* READ-COMPLETE TOAST */
    const readToast = document.getElementById('read-complete-toast');

    if (readToast) {
        const footer = document.querySelector('footer');
        let hasShown = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasShown) {
                    hasShown = true;
                    readToast.classList.add('visible');

                    setTimeout(() => {
                        readToast.classList.remove('visible');
                    }, 4000);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(footer);
    }

    /* EASTER EGG: CONSOLE MESSAGE */
    console.log('%c> SYSTEM ACCESS DETECTED', 'color: #ff003c; font-family: monospace; font-size: 20px; font-weight: bold;');
    console.log('%cHey, nieuwsgierige developer! Leuk dat je een kijkje neemt onder de motorkap.', 'color: #94a3b8; font-family: monospace; font-size: 12px;');
    console.log('%cAls je op zoek bent naar een stagiair die dit soort details waardeert — mijn contactgegevens staan op /contact.html', 'color: #eceff4; font-family: monospace; font-size: 12px;');
    console.log('%cPS: probeer eens de Konami code... ↑ ↑ ↓ ↓ ← → ← → B A', 'color: #ff5500; font-family: monospace; font-size: 12px;');

    /* EASTER EGG: KONAMI CODE → VIDEO MODAL*/
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const eggModal = document.getElementById('easter-egg-modal');
    const eggIframe = document.getElementById('egg-modal-iframe');
    const eggCloseBtn = document.getElementById('egg-modal-close');

    const EASTER_EGG_VIDEO_ID = 'xvFZjo5PgG0';

    function openEggModal() {
        if (!eggModal || !eggIframe) return;
        eggIframe.src = `https://www.youtube.com/embed/${EASTER_EGG_VIDEO_ID}?autoplay=1`;
        eggModal.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }

    function closeEggModal() {
        if (!eggModal || !eggIframe) return;
        eggModal.classList.remove('visible');
        eggIframe.src = '';
        document.body.style.overflow = '';
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                document.body.classList.add('easter-egg-active');
                openEggModal();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    if (eggCloseBtn) {
        eggCloseBtn.addEventListener('click', closeEggModal);
    }

    if (eggModal) {
        eggModal.querySelector('.egg-modal-overlay').addEventListener('click', closeEggModal);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && eggModal && eggModal.classList.contains('visible')) {
            closeEggModal();
        }
    });
});