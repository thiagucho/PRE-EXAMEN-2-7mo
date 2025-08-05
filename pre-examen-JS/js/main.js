function generarToast(){

     M.toast({html: 'I am a toast!'});
}
/////

function cambiarColor(){
     var input = document.querySelector("#colorPicker");
     var body = document.querySelector("body");

     body.style.backgroundColor = input.value;

}

function escribirEnDiv(){
     var textarea = document.querySelector("#textarea1");
     var eldiva = document.querySelector("#eldiv");

     eldiva.innerHTML = "<h3>" + textarea.value + "</h3>";
}