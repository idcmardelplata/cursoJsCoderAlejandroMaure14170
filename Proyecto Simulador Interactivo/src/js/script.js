//constantes
//obtencion de datos del dom

const formulario = document.getElementById("formGroup");
const nombre = formulario.nombre;
const tipo = formulario.tipo;
const edad = formulario.edad;
const tamanio = formulario.tamanio;
const peso = formulario.peso;
const marca = formulario.marca;
const datosResultado = document.getElementById("resultado");
const datosGuardado = document.getElementById("petData");
const fotos = document.getElementById("photos");
const listaResponsive = document.getElementById("seccionLista");

//funciones de calculo de comida
function cantidadTipoEdad(tipo, edad) {
    if (tipo == "gato" && edad == "cachorro") {
        return 70;
    }else if(tipo == "gato" && edad =="adulto"){
        return 10;
    }else if(tipo == "perro" && edad == "cachorro"){
        return 22;
    }else if(tipo == "perro" && edad == "adulto"){
        return 25;
    }
};
    
function cantidadTamanio(tamanio) {
    switch (tamanio) {
        case "chico":
        return 0.7;
        
        case "mediano":
        return 0.73;

        case "grande":
        return 0.75;

        default:
            break;
    }
};

function cantidadMarca(marca){
    switch (marca) {
        case "proplan":
            return 1.5;
    
        case "eukanuba":

            return 1.5;
        
        case "vitalcan":
            
            return 1.2;

        case "royalcanin":
            
            return 1.5;

        case "excellent":
            
            return 1.2;

        case "dogchow":
            
            return 1.6;

        case "dogui":
            
            return 1.1;

        case "gati":
            
            return 1.2;

        case "raza":
            
            return 1.3;

        case "sabrositos":
            
            return 1.3;
    
        case "pedigree":
            
            return 1.5;

        case "whiskas":
            
            return 1.1;

        case "otros":
            
            return 1.3;

        default:
            break;
    }
}

//clases
//creacion del objeto mascota
class Mascota{
    constructor(nombre, tipo, edad, tamanio, peso, marca, cantidad){
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;
        this.tamanio = tamanio;
        this.peso = peso;
        this.marca = marca;
        this.cantidad = cantidad;
    }
    
}

//funcion que calula la cantidad de comida segun los valores
function cantidad () {
    return Math.round(cantidadTipoEdad(tipo.value, edad.value) * cantidadTamanio(tamanio.value) * cantidadMarca(marca.value) * peso.value);
}

//constante
let cantidadComida = cantidad(tipo, edad, tamanio, marca, peso);


//respuesta a la consulta
//seccion de consulta
formulario.addEventListener('submit', (e =>{
    e.preventDefault();
    validarFormulario();
    mostrar = new Mascota(nombre.value, tipo.value, edad.value, tamanio.value, peso.value, marca.value, cantidad(tipo, edad, tamanio, marca, peso));

let mostrarResultado = `
        <div id="mostrar">
            <h3>${mostrar.nombre}</h3> 
            <p>Tipo: ${mostrar.tipo}</p> 
            <p>Edad: ${mostrar.edad}</p>
            <p>Tamano: ${mostrar.tamanio}</p>
            <p>Peso: ${mostrar.peso} Kg.</p>
            <p>Marca de Alimento: ${mostrar.marca}</p>
            <p>Cantidad de Alimento: ${cantidad(tipo, edad, tamanio, marca, peso)} gr.</p>
            <button class="save-btn" id="agregar"> Guardar Mascota </button>
            <button class="input-button" id="clear">Limpiar Busqueda</button>
        </div>
            `;

            datosResultado.innerHTML = mostrarResultado;

formulario.reset();

$('#agregar').click(() =>{
    localStorage.setItem(mostrar.nombre, JSON.stringify(mostrar));
});


}));

function mostrarEnDom() {

    let mostrarMascota = JSON.parse(localStorage.getItem(mostrar.nombre));
        $('#petData').append(`
        <div>
        <h3>${mostrar.nombre}</h3>
        <p>Tipo: ${mostrar.tipo}</p>
        <p>Edad: ${mostrar.edad}</p>
        <p>Tamano: ${mostrar.tamanio}</p>
        <p>Peso: ${mostrar.peso}Kg.</p>
        <p>Marca de Alimento: ${mostrar.marca}</p>
        <p>Cantidad de Alimento: ${mostrar.cantidadComida} gr.</p>
        <button id="eliminar"><i class="fas fa-trash-alt"></i></button>
        </div>
    `)}

//evento eliminacion de la mascota guardada y del localstorage
    $('#eliminar').click(() =>{
    $('#petData').fadeOut("slow", function eliminar() {
        $('#petData').remove();
        location.reload();
    });
    localStorage.removeItem(mostrar.nombre);
    })


//evento limpieza de resultado de la busqueda
$('#clear').click(() =>{
    $('#resultado').fadeOut("slow", () =>{
        datosResultado.innerHTML = ""
        location.reload();
    });
})

//funcion que valida el formulario si no se selecciona una marca
function validarFormulario(){

    if (marca.value == "seleccionar") {
        alert("Por favor, Ingresa una marca");
        location.reload();
    }
}

//carga de la mascota guardada al recargar o abrir la pagina
window.onload = mostrarEnDom();


$("#lista").click(() => {
    fotos.innerHTML = ""
    listaResponsive.innerHTML = `
    <div class="box-api">
    <button id="closeList"><i class="fas fa-times"></i></button>
    </div>`
    closeList();
})

        //MANEJO DE THE CAT API Y THE DOG API

//carga de fotos random de perros
$("#dp").click(() => {
    $.get('https://dog.ceo/api/breeds/image/random', (res) => {
    listaResponsive.innerHTML = "";
    fotos.innerHTML = `
    <div class="box-api">
    <button id="closePic"><i class="fas fa-times"></i></button>
    <img src="${res.message}">
    </div>`
    closePic();
});
});

//carga de fotos random de gatos
$("#cp").click(() => {
    $.get(' https://api.thecatapi.com/v1/images/search', (res) => {
    listaResponsive.innerHTML = "";
    fotos.innerHTML = `
    <div class="box-api">
    <button id="closePic"><i class="fas fa-times"></i></button>
    <img src="${res[0].url}">
    </div>
    `
    closePic();
});
});

//funcion borrar imagen

function closePic() {
    $("#closePic").click(() => {
        $(".box-api").fadeOut("slow", () => {
            fotos.innerHTML = "";
        })
    });
};

function closeList() {
    $("#closeList").click(() => {
        $(".box-api").fadeOut("slow", () =>{
            listaResponsive.innerHTML = "";
        })
    })
}