document.addEventListener('DOMContentLoaded', () => {
    console.log("Tech portfolio succesvol geladen. System operational.");

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
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Tech portfolio succesvol geladen. System operational.");
    const body = document.body;

    window.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;
        body.style.setProperty('--mouse-x', `${x}px`);
        body.style.setProperty('--mouse-y', `${y}px`);
    });

    const contactForm = document.getElementById('portfolio-contact-form');
    if (contactForm) {
    }
});