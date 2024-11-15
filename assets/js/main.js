//https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
fetch('./assets/js/equipo.json')
  .then(function (response) {
    if (response.ok) {
      console.log("Respuesta recibida:", response);
      return response.json();
    } else {
      console.log("No se puede leer el archivo Json", response.status);
    }
  })
  .then(function (data) {
    console.log("Datos del JSON:", data);
  })
  .catch(function (error) {
    console.log("Hubo un problema con la petición Fetch:" + error.message);
  });
