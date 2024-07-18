let numeroSecreto = 0;
let numeroDeIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroMaxIntentos = 5;

function asignarTextoElemento(elemento, texto) {
    let = elemento = document.querySelector(elemento);
    elemento.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`ENCONTRASTE EL NUMERO SECRETO <br>¡Acertaste el número en ${numeroDeIntentos} ${(numeroDeIntentos === 1) ? "intento" : "intentos"}!`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p",`EL NUMERO SECRETO ES MENOR. <br> ${(numeroMaxIntentos - numeroDeIntentos) == 1 ? "Te queda" : "Te quedan"} ${numeroMaxIntentos-numeroDeIntentos} ${(numeroMaxIntentos - numeroDeIntentos) == 1 ? "intento" : "intentos"}`);   
        } else{
            asignarTextoElemento("p",`EL NUMERO SECRETO ES MAYOR. <br> ${(numeroMaxIntentos - numeroDeIntentos) == 1 ? "Te queda" : "Te quedan"} ${numeroMaxIntentos-numeroDeIntentos} ${(numeroMaxIntentos - numeroDeIntentos)== 1 ? "intento" : "intentos"}`);
        }
        numeroDeIntentos++;
        limpiarCaja();
        if (numeroDeIntentos > numeroMaxIntentos){
            asignarTextoElemento("p",`Llegaste al numero maximo de intentos, el NUMERO SECRETO era ${numeroSecreto} :c`);
            document.getElementById("reiniciar").removeAttribute("disabled");
        }
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ("p","Ya se sortearon todos los numeros posibles");
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    //Mensaje de inicio
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Indicame un número del 1 al ${numeroMaximo}. Tienes ${numeroMaxIntentos} intentos para encontar el NUMERO SECRETO`);
    //Generar el número aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el numero de intentos
    numeroDeIntentos = 1;
    console.log(numeroSecreto);
    console.log(listaNumerosSorteados);
}
function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    
}

condicionesIniciales();