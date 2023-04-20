const form = document.querySelector('form');
const confirmacionDiv = document.createElement('div');
form.appendChild(confirmacionDiv);

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitamos que el formulario se envíe

  const inputs = {
    nombreRem: document.getElementById('nombre-rem').value,
    direccionRem: document.getElementById('direccion-rem').value,
    nombreDest: document.getElementById('nombre-dest').value,
    direccionDest: document.getElementById('direccion-dest').value,
    pesoPaq: document.getElementById('peso-paq').value,
    dimensionesPaq: document.getElementById('dimensiones-paq').value,
    tipoServicio: document.getElementById('tipo-servicio').value
  };

  const { nombreRem, direccionRem, nombreDest, direccionDest, pesoPaq, dimensionesPaq, tipoServicio } = inputs;

  const confirmacion = confirm(`
    ¿Estás seguro de que deseas enviar el paquete con los siguientes datos?
    
    Remitente:
    - Nombre: ${nombreRem}
    - Dirección: ${direccionRem}
    
    Destinatario:
    - Nombre: ${nombreDest}
    - Dirección: ${direccionDest}
    
    Paquete:
    - Peso: ${pesoPaq} kg
    - Dimensiones: ${dimensionesPaq}
    - Tipo de servicio: ${tipoServicio}
  `);

  if (confirmacion) {
    const mensajeConfirmacion = document.createElement('p');
    mensajeConfirmacion.textContent = 'Información enviada tu numero de ticket es #65432 imprimilo y acercate a nuestras sucursales con el paquete';
    mensajeConfirmacion.style.backgroundColor = '#4CAF50';
    mensajeConfirmacion.style.color = '#FFF';
    mensajeConfirmacion.style.padding = '10px';
    mensajeConfirmacion.style.borderRadius = '5px';
    confirmacionDiv.appendChild(mensajeConfirmacion);
  }
  
});

