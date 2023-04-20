 // Obtiene los elementos del carrusel y los slides
  const carousel = document.getElementById('carouselExampleDark');
  const slides = carousel.querySelectorAll('.carousel-item');

  // Inicializa el slide actual y la cuenta de tiempo
  let currentSlide = 0;
  let intervalId = null;

  // Define la función para cambiar el slide
  function changeSlide() {
    // Oculta el slide actual
    slides[currentSlide].classList.remove('active');
    // Calcula el índice del siguiente slide
    currentSlide = (currentSlide + 1) % slides.length;
    // Muestra el siguiente slide
    slides[currentSlide].classList.add('active');
  }

  // Inicia el intervalo para cambiar el slide cada 3 segundos
  intervalId = setInterval(changeSlide, 3000);

  // Detiene el intervalo cuando se hace clic en un botón de control
  const controlButtons = carousel.querySelectorAll('.carousel-control-prev, .carousel-control-next');
  controlButtons.forEach(button => {
    button.addEventListener('click', () => {
      clearInterval(intervalId);
    });
  });
