const contrastToggle = document.getElementById('contrast-toggle');
const decreaseText = document.getElementById('text-size-decrease');
const resetText = document.getElementById('text-size-reset');
const increaseText = document.getElementById('text-size-increase');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

const textSizes = [16, 18, 20, 22, 24];
let currentTextIndex = 1;

function updateTextSize() {
  document.documentElement.style.setProperty('--font-size', `${textSizes[currentTextIndex]}px`);
}

function setContrastMode() {
  document.body.classList.toggle('high-contrast');
  const isPressed = document.body.classList.contains('high-contrast');
  contrastToggle.setAttribute('aria-pressed', String(isPressed));
  contrastToggle.textContent = isPressed ? 'Desativar alto contraste' : 'Modo alto contraste';
}

contrastToggle.addEventListener('click', setContrastMode);

decreaseText.addEventListener('click', () => {
  if (currentTextIndex > 0) {
    currentTextIndex -= 1;
    updateTextSize();
  }
});

resetText.addEventListener('click', () => {
  currentTextIndex = 1;
  updateTextSize();
});

increaseText.addEventListener('click', () => {
  if (currentTextIndex < textSizes.length - 1) {
    currentTextIndex += 1;
    updateTextSize();
  }
});

contactForm.addEventListener('submit', event => {
  event.preventDefault();

  const name = contactForm.elements.name.value.trim();
  const email = contactForm.elements.email.value.trim();
  const message = contactForm.elements.message.value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = 'Por favor, preencha todos os campos antes de enviar.';
    formStatus.style.color = '#b91c1c';
    return;
  }

  formStatus.textContent = 'Mensagem enviada com sucesso! Obrigado por entrar em contato.';
  formStatus.style.color = '#059669';
  contactForm.reset();
});

updateTextSize();
