//https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
fetch('./equipo.json')
  .then(function (response) {
    if (response.ok) {
      console.log("Respuesta recibida:", response);
      return response.json();
    } else {
      console.log("No se puede leer el archivo Json", response.status);
    }
  })
  .then(function (data) {
    console.log(data); 
    if (Array.isArray(data.equipo)) {
      data.equipo.forEach(element => {
        console.log(element); 
      });
    } else {
      console.error("El JSON no contiene un array en la propiedad 'equipo'.");
    }
  })
  .catch(function (error) {
    console.log("Hubo un problema con la petición Fetch:" + error.message);
  });

  