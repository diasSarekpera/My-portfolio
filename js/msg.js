(function() {
    emailjs.init({
      publicKey: "NE4Xq0ew-Hb8uD9Yv"
    });
  })();

  const form = document.getElementById('contact-form');
  const sendBtn = document.getElementById('send-btn');
  const formMessage = document.getElementById('form-message');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    sendBtn.disabled = true;
    sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    formMessage.textContent = '';
    formMessage.className = 'form-message';

    emailjs.sendForm('service_05kzmdf', 'template_i97gpz7', this)
      .then(() => {
        formMessage.textContent = '✅ Message envoyé avec succès !';
        formMessage.classList.add('success', 'active');
        form.reset();
      })
      .catch((error) => {
        console.error('Erreur:', error);
        formMessage.textContent = '❌ Une erreur est survenue. Réessayez plus tard.';
        formMessage.classList.add('error', 'active');
      })
      .finally(() => {
        sendBtn.disabled = false;
        sendBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer le message';
      });

    // Efface le message après 5 secondes
    setTimeout(() => {
      formMessage.classList.remove('active');
    }, 5000);
});






