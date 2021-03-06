/*Calculadora de correccion de la densidad del mosto
en el proceso de elaboracion de cerveza*/


//variables de datos a ingresar
let densidad;
let temp;
let densidadReal;

//ingreso valor de densidad
function ingresoDensidad() {
        densidad = parseInt(prompt("Ingesar lectura de densidad sin punto(.). Ej, 1016 2040"));
}

//ingreso de valor temperatura en grados centigrados
function ingresoTemp() {
    temp = parseInt(prompt("Ingrese temperatura del mosto (C)"));
}

//suma o resta valor a la densidad segun el rango de temperatura
function correccionTemp(ingresoTemp) {
    if (temp <= 11) {
        densidadReal = densidad - 1;
    }else if (temp >= 19 && temp <= 23) {
        densidadReal = densidad + 1;
    }else if(temp >= 24 && temp <= 27){
        densidadReal = densidad + 2;
    }else if(temp >= 28 && temp <= 30){
        densidadReal = densidad + 3;
    }else densidadReal = densidad + 4;
    
    
    
}

ingresoDensidad();
ingresoTemp();
correccionTemp();
alert("la densidad es " + densidadReal);

