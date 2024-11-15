//https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

let equipoData;

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
    equipoData = data;
    console.log(equipoData);
  })
  .catch(function (error) {
    console.log("Hubo un problema con la petición Fetch:" + error.message);
  });

equipoData.forEach(element => {
  console.log(element);
});
