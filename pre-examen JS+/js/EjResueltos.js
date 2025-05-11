function cambiarColor(){
    radios = document.querySelector("#colorPicker");
    body = document.querySelector("body");

    body.style.backgroundColor = radios.value;
        
    

}

function escribirEnDiv(){
    area = document.querySelector("#textarea1");
    divEj2 = document.querySelector(".divEj2");

    divEj2.innerHTML = area.value;
    
}

function ejeTarjetas(){
    cantidadTarjetas = document.querySelector("#cantidadTarjetas");
    divTarjetas = document.querySelector(".divTarjetas");
    cant = cantidadTarjetas.value;

    console.log(cantidadTarjetas.value);

    tarjeta = `<div class="col s3">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">TARJETA</span>
          <p>Soy una tarjeta de prueba, práctica y sencilla.</p>
        </div>
      </div>
    </div>`;
    divTarjetas.innerHTML = "";

    for (let index = 0; index < cant; index++) {
        divTarjetas.innerHTML += tarjeta;
        
    }
}

function cargarJSON(){

    
}

