document.addEventListener('DOMContentLoaded', () => {
    console.log("Tech portfolio succesvol geladen. System operational.");

    // Selecteer het contactformulier als het aanwezig is op de huidige pagina
    const contactForm = document.getElementById('portfolio-contact-form');
    const statusMessage = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Voorkom de standaard pagina-refresh
            event.preventDefault();

            // Haal de ingevulde waardes op
            const name = document.getElementById('form-name').value;

            // Simuleer verzending/verwerking
            statusMessage.textContent = "Systeem: Bericht wordt verzonden...";
            statusMessage.className = "form-status-message";

            setTimeout(() => {
                // Toon succes-feedback aan de gebruiker
                statusMessage.textContent = `> Succes: Bedankt voor je bericht, ${name}! Systeem heeft data ontvangen.`;
                statusMessage.classList.add('success');

                // Reset het formulier
                contactForm.reset();
            }, 1000);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Tech portfolio succesvol geladen. System operational.");

    // ==========================================================================
    // CYBERPUNK MOUSE GLOW EFFECT (Brittany Chiang Style)
    // ==========================================================================
    const body = document.body;

    window.addEventListener('mousemove', (event) => {
        // Bereken de positie van de muis ten opzichte van het scherm
        const x = event.clientX;
        const y = event.clientY;

        // Geef de coördinaten door als CSS variabelen aan de body
        body.style.setProperty('--mouse-x', `${x}px`);
        body.style.setProperty('--mouse-y', `${y}px`);
    });

    // Formulierafhandeling (die stond hier al)
    const contactForm = document.getElementById('portfolio-contact-form');
    if (contactForm) {
        // ... je bestaande formulier code ...
    }
});