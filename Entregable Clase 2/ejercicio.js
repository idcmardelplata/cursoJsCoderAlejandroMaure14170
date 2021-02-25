let nombre = prompt("Ingrese su nombre");
let dia = parseInt(prompt("Ingrese su dia de nacimiento: ejemplo. 1, 2, 3, etc"));
let mes = parseInt(prompt("Ingrese su mes de nacimiento: ejemplo. enero es 1, febrero es 2, etc"));


if ((dia >= 21 && mes == 1) || (dia <= 18 && mes == 2)) {

    alert("Que bueno " + nombre + "!" + " Tu signo es ACUARIO")

}else if ((dia >= 19 && mes == 2) || (dia <= 20 && mes == 3)) {

    alert("Que bueno " + nombre + "!" + " Tu signo es PISCIS")

} else if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) {
    
    alert("Que bueno " + nombre + "!" + " Tu signo es ARIES")

} else if ((dia >= 21 && mes == 4) || (dia <= 20 && mes == 5)) {
    
    alert("Que bueno " + nombre + "!" + " Tu signo es TAURO")

} else if ((dia >= 21 && mes == 5) || (dia <= 21 && mes == 6)) {
    
    alert("Que bueno " + nombre + "!" + " Tu signo es GEMINIS")

} else if ((dia >= 22 && mes == 6) || (dia <= 22 && mes == 7)) {
    
    alert("Que bueno " + nombre + "!" + " Tu signo es CANCER")

} else if ((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8)) {
    
    alert("Que bueno " + nombre + "!" + " Tu signo es LEO")

}else if ((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9)) {
    
    alert("Que bueno " + nombre + "!" + " Tu signo es VIRGO")

}else if ((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10)) {
    
    alert("Que bueno " + nombre + "!" + " Tu signo es LIBRA")

}else if ((dia >= 22 && mes == 10) || (dia <= 22 && mes == 11)) {
    
    alert("Que bueno " + nombre + "!" + " Tu signo es ESCORPIO")

}else if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)) {
 
    alert("Que bueno " + nombre + "!" + " Tu signo es SAGITARIO")

}else if ((dia >= 21 && mes == 12) || (dia <= 20 && mes == 1)) {
    
    alert("Que bueno " + nombre + "!" + " Tu signo es CAPRICORNIO")

}