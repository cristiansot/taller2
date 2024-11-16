/* Ruta de aprendizaje 
//https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
//https://www.youtube.com/watch?v=WTbni8QMos0&ab_channel=CodingTube
*/

let equipoData;
let cardsContainer = document.querySelector('.cards__container');
let gastro = document.querySelector('.gastro');
let cardio = document.querySelector('.cardio');
let psico = document.querySelector('.psico');
let trauma = document.querySelector('.trauma');

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

    equipoData.forEach(element => {
      cardsContainer.innerHTML += `
        <div class="col"> 
          <div class="card m-1"> 
            <img class="card-img-top" src="${element.imagen}" alt="${element.nombre}">
            <div class="card-body">
              <h4 class="card-title mt-1">${element.nombre}</h4>
              <h5 class="card-title">${element.especialidad}</h5>
              <p class="card-text">${element.resumen}</p>
            </div>
          </div>
        </div>`;
      console.log(element);
    });
    
    gastro.addEventListener("click", function () {
      const gastroenteorologia = equipoData.filter(item => item.especialidad.toLowerCase() === "gastroentereología");
      console.log(gastroenteorologia)
    });

    cardio.addEventListener("click", function () {
      const cardiologia = equipoData.filter(item => item.especialidad.toLowerCase() === "cardiología");
      console.log(cardiologia);
    });

    psico.addEventListener("click", function () {
      const psicologia = equipoData.filter(item => item.especialidad.toLowerCase() === "psicología");
      console.log(psicologia)
    });

    trauma.addEventListener("click", function () {
      const traumatologia = equipoData.filter(item => item.especialidad.toLowerCase() === "traumatología");
      console.log(traumatologia)
    });

    let cards = document.querySelectorAll('.card');
    console.log(cards);
  })
  .catch(function (error) {
    console.log("Hubo un problema con la petición Fetch: " + error.message);
  });




 

