const userNameInput = document.getElementById('userName');
const emailInput = document.getElementById('email');
const asuntoInput = document.getElementById('asunto');
const mensajeInput = document.getElementById('mensaje')

userNameInput.addEventListener('click', () => {
  const userName = prompt('Ingresa tu nombre:');
  userNameInput.value = userName; 
  console.log(userName);
});

emailInput.addEventListener('click', () => {
    const email = prompt('Ingresa tu correo electrónico');
    emailInput.value = email;
    console.log(email);
})

asuntoInput.addEventListener('click', () => {
    const asunto = prompt('Ingrese el asunto');
    asuntoInput.value = asunto;
    console.log(asunto);
})

mensajeInput.addEventListener('click', () => {
    const mensaje = prompt('Ingrese el mensaje');
    mensajeInput.value = mensaje;
    console.log(mensaje);
})


