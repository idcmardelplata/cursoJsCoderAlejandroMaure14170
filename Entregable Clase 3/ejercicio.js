let nombre = prompt("Ingrese su nombre");
let dia = parseInt(prompt("Ingrese su dia de nacimiento: ejemplo. 1, 2, 3, etc"));
let mes = prompt("Ingrese su mes de nacimiento: ejemplo. enero, febrero, etc");


switch (mes) {
    case "enero":
        if (dia >= 21) {
            alert("Hola " + nombre + " tu signo es " + "ACUARIO")
        }
        break;
    case "febrero":
        if (dia <= 19) {
            alert("Hola " + nombre + " tu signo es " + "ACUARIO")
        }else{
        alert("Hola " + nombre + " tu signo es " + "PISCIS");
        }
        break;
    case "marzo":
        if (dia <= 20) {
            alert("Hola " + nombre + " tu signo es " + "PISCIS");
        }else{
            alert("Hola " + nombre + " tu signo es " + "ARIES")
        }
        break;
    case "abril":
        if (dia <= 20) {
            alert("Hola " + nombre + " tu signo es " + "ARIES");
        }else{
            alert("Hola " + nombre + " tu signo es " + "TAURO")
        }
        break;
    case "mayo":
        if (dia <= 21) {
            alert("Hola " + nombre + " tu signo es " + "TAURO");
        }else{
            alert("Hola " + nombre + " tu signo es " + "GEMINIS")
        }
        break;
    case "junio":
        if (dia <= 21) {
            alert("Hola " + nombre + " tu signo es " + "GEMINIS");
        }else{
            alert("Hola " + nombre + " tu signo es " + "CANCER")
        }
        break;
    case "julio":
        if (dia <= 23) {
            alert("Hola " + nombre + " tu signo es " + "CANCER");
        }else{
            alert("Hola " + nombre + " tu signo es " + "LEO")
        }
        break;
    case "agosto":
        if (dia <= 23) {
            alert("Hola " + nombre + " tu signo es " + "LEO");
        }else{
            alert("Hola " + nombre + " tu signo es " + "VIRGO")
        }
        break;
    case "septiembre":
        if (dia <= 23) {
            alert("Hola " + nombre + " tu signo es " + "VIRGO");
        }else{
            alert("Hola " + nombre + " tu signo es " + "LIBRA")
        }
        break;
    case "octubre":
        if (dia <= 23) {
            alert("Hola " + nombre + " tu signo es " + "LIBRA");
        }else{
            alert("Hola " + nombre + " tu signo es " + " Tu signo es " + "ESCORPIO")
        }
        break;
    case "noviembre":
        if (dia <= 22) {
            alert("Hola " + nombre + " tu signo es " + "ESCORPIO");
        }else{
            alert("Hola " + nombre + " tu signo es " + "SAGITARIO")
        }
        break;
    case "diciembre":
        if (dia <= 21) {
            alert("Hola " + nombre + " tu signo es " + "SAGITARIO");
        }else{
            alert("Hola " + nombre + " tu signo es " + "CAPRICORNIO")
        }
        break;
}

