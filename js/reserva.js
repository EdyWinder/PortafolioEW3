// Inicializa EmailJS con tu public key
emailjs.init("c8aG1QOAVvPAOBvdBY");

document.getElementById('rounded-btn').addEventListener('click', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const invitados = document.getElementById('invitados').value;
  const hora = document.getElementById('hora').value;
  const fecha = document.getElementById('fecha').value;
  const mensaje = document.getElementById('mensaje');

  if (!email || !invitados || !hora || !fecha) {
    mensaje.textContent = 'Por favor, completa todos los campos.';
    mensaje.style.color = 'orange';
    return;
  }

  const templateParams = {
    to_email: email,
    invitados: invitados,
    hora: hora,
    fecha: fecha
  };

  emailjs.send('service_74eb3uc', 'template_gt3gvrs', templateParams)
    .then(function(response) {
      mensaje.textContent = '¡Reserva enviada con éxito! Te contactaremos pronto.';
      mensaje.style.color = 'lightgreen';
    }, function(error) {
      mensaje.textContent = 'Ocurrió un error al enviar la reserva. Intenta nuevamente.';
      mensaje.style.color = 'red';
    });
});