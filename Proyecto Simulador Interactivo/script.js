let tipoMascota;
let edadMascota;

function IngresoDatos() {
    tipoMascota = prompt("Tu mascota es perro o gato?");
    edadMascota = prompt("Es cachorro o adulto?");
}



function mostrarDatos() {
    if ((tipoMascota == "gato" || tipoMascota == "perro") && (edadMascota == "cachorro" || edadMascota == "adulto")){
        alert("Tu " + tipoMascota + " es " + edadMascota);
    }else alert("Volver a ingresar los datos. Pulsa F5 para continuar")
    
}

IngresoDatos();
mostrarDatos();