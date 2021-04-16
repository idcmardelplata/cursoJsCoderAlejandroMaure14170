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



//respuesta a la consulta
//seccion de consulta
formulario.addEventListener('submit', (e =>{
    
    e.preventDefault();
    
    const cantidad = Math.round(cantidadTipoEdad(tipo.value, edad.value) * cantidadTamanio(tamanio.value) * cantidadMarca(marca.value) * peso.value);

    const mascotaAMostrar = new Mascota(nombre.value, tipo.value, edad.value, tamanio.value, peso.value, marca.value, cantidad);

let mostrarResultado = `
        <div id="mascotaAMostrar">
            <h3>${mascotaAMostrar.nombre}</h3> 
            <p>Tipo: ${mascotaAMostrar.tipo}</p> 
            <p>Edad: ${mascotaAMostrar.edad}</p>
            <p>Tamano: ${mascotaAMostrar.tamanio}</p>
            <p>Peso: ${mascotaAMostrar.peso}Kg.</p>
            <p>Marca de Alimento: ${mascotaAMostrar.marca}</p>
            <p>Cantidad de Alimento: ${mascotaAMostrar.cantidad} gr.</p>
            <button class="save-btn" id="agregar"> Guardar Mascota </button>
            <button class="input-button" id="clear">Limpiar Busqueda</button>
        </div>
            `;


            datosResultado.innerHTML = mostrarResultado;

formulario.reset();




//agregado de la mascota a la seccion de mascota guardada y local storage
//tambien en la funcion muestra en el dom la misma
$('#agregar').click(() =>{
    agregar();

function agregar() {
    $('#agregar').fadeIn("slow", function (){
        const agregarMascota = localStorage.setItem(mascotaAMostrar.nombre, JSON.stringify(mascotaAMostrar));
    
        let mostrarMascota = JSON.parse(localStorage.getItem(mascotaAMostrar.nombre));
        
        $('#petData').append(`
        <div>
        <h3>${mostrarMascota.nombre}</h3>
        <p>Tipo: ${mostrarMascota.tipo}</p>
        <p>Edad: ${mostrarMascota.edad}</p>
        <p>Tamano: ${mostrarMascota.tamanio}</p>
        <p>Peso: ${mostrarMascota.peso}Kg.</p>
        <p>Marca de Alimento: ${mostrarMascota.marca}</p>
        <p>Cantidad de Alimento; ${mostrarMascota.cantidad} gr.</p>
        <button id="eliminar"><i class="fas fa-trash-alt"></i></button>
        </div>
    `);

    //evento eliminacion de la mascota guardada y del localstorage
    $('#eliminar').click(() =>{
    $('#petData').fadeOut("slow", function eliminar() {
        $('#petData').remove();
        location.reload();
    });
    localStorage.removeItem(mascotaAMostrar.nombre);
    })
    
})
}

});

//evento limpieza de resultado de la busqueda
$('#clear').click(() =>{
    $('#resultado').fadeOut("slow", () =>{
        datosResultado.innerHTML = ""
        location.reload();
    });
}
  

)
}));


//modo oscuro
$(()=> {
    $("#nightIcon").click(() => {
        $("body").toggleClass("dark-mode")
    })
})

//final ready function


//carga de fotos random de perros
$("#dp").click(() => {
    $.get('https://dog.ceo/api/breeds/image/random', (res) => {
    console.log()
    
    fotos.innerHTML = `<img src="${res.message}" width=100px height=100px>`
});
});

//carga de fotos radom de gatos
$("#cp").click(() => {
    $.get(' https://api.thecatapi.com/v1/images/search', (res) => {
    console.log(res)
    
    fotos.innerHTML = `<img src="${res[0].url}" width=100px height=100px>`
});
});