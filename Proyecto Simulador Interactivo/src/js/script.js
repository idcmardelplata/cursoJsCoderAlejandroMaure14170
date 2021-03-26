

//ingresar
let mascotaIngresada = '';




//funciones

    

    let datosNombre = document.getElementById("datosNombre").value;
    let datosPeso = document.getElementById("datosPeso").value;
    let datosMarca = document.getElementById("datosMarca").value;

    let guardarBtn = document.getElementById("guardar");

    let datosTipo = "";

    let tipoPerro = document.getElementById("perro");
    let tipoGato = document.getElementById("gato");
    if (tipoPerro.checked){
        datosTipo = tipoPerro.value;
    }else{
        datosTipo = tipoGato.value;
    }


    let datosEdad = "";

    let edadCachorro = document.getElementById("cachorro");
    let edadAdulto = document.getElementById("adulto");

    if (edadCachorro.checked){
        datosEdad = edadCachorro.value;
    }else{
        datosEdad = edadAdulto.value;
    }


    let datosTamano = "";

    let tamanoChico = document.getElementById("chico");
    let tamanoMediano = document.getElementById("mediano");
    let tamanoGrande = docuemnt.getElementById("grande");

    if (tamanoChico.checked){
        datosTamano = tamanoChico.value;
    }else if (tamanoMediano.checked){
        datosTamano = tamanoMediano.value;
    }else{
        datosTamano = tamanoGrande.value;
    }

    guardarBtn.addEventListener("click", mostrarResultado);
    document.getElementById("guardar").addEventListener("click", (event) => {event.preventDefault()});

    let mostrarResultado = `<p>Nombre: ${datosNombre}</p><br> <p>Tipo: ${datosTipo}</p><br> <p>Edad: ${datosEdad}</p><br> <p>Tamano: ${datosTamano}</p><br> <p>Peso: ${datosPeso}Kg.</p><br>`
    

let datosResultado = document.createElement("div");

datosResultado.innerHTML = mostrarResultado;

document.getElementById("petData").appendChild(datosResultado);



//local storage
/*let stgNombre = localStorage.setItem('nombre', datosNombre);
let stgTipo = localStorage.setItem('tipo', datosTipo);
let stgEdad = localStorage.setItem('edad', datosEdad);
let stgTamano = localStorage.setItem('tamano', datosTamano);
let stgPeso = localStorage.setItem('peso', datosPeso);
let stgMarca = localStorage.setItem('marca', datosMarca);
*/

//clases
class Mascota{
    constructor(nombre, tipo, edad, tamano, peso, marca) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;
        this.tamano = tamano;
        this.peso = peso;
        this.marca = marca;
    }
    cantidadDeComida(){
        return this.peso*10*3;
    }
}



        
mascota1 = new Mascota(nombre, tipo, edad, tamano, peso, marca);


const mascotas = [];
mascotas.push(new Mascota(nombre, tipo, edad, tamano, peso, marca));

