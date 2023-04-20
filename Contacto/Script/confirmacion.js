const form = document.getElementById('contact-form');
const mensajeInput = document.getElementById('mensaje-input');
const mensajeCount = document.getElementById('mensaje-count');
const confirmacionDiv = document.getElementById('confirmacionDiv');

mensajeInput.addEventListener('input', () => {
  const remainingChars = 500 - mensajeInput.value.length;
  mensajeCount.textContent = `${remainingChars} caracteres restantes`;

  if (remainingChars < 0) {
    mensajeCount.style.color = 'red';
  } else {
    mensajeCount.style.color = 'inherit';
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (!form.checkValidity()) {
    return;
  }

  form.classList.add('was-validated');
  confirmacionDiv.style.display = 'block';
});
