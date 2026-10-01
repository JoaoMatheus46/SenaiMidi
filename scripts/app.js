let teclas = document.querySelectorAll(".tecla")



function tocarSom(idElementoSom){
    document.querySelector(idElementoSom).play();
}
let contador = 0
while (contador < 9){
    let tecla = teclas[contador];
    let instrumento = tecla.classList[1];
    let audio = `#som_${instrumento}`;
    tecla.onclick = function (){
        tocarSom(audio);
       
    }
    contador++;
}