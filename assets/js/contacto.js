const userNameInput = document.getElementById('userName');

userNameInput.addEventListener('click', () => {
  const userName = prompt('Por favor, ingresa tu nombre:');
  if (userName) {
    userNameInput.value = userName; 
    console.log(userName);
  }
});

