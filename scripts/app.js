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
    tecla.onkeydown = function(event){
        if(event.code === "Enter" | event.code === "Space" | event.code === "NumpadEnter"){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
    contador++;
}
