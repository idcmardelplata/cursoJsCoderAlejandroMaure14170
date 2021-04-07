//constantes

const formulario = document.getElementById("formGroup");
const nombre = formulario.nombre;
const tipo = formulario.tipo;
const edad = formulario.edad;
const tamanio = formulario.tamanio;
const peso = formulario.peso;
const marca = formulario.marca;
const datosResultado = document.getElementById("resultado");
const datosGuardado = document.getElementById("petData");
const cantidad = function cantidadDeComida(peso) {var resultado  = peso * 10 * 3;{return resultado}} 
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
        this.cantidad = cantidad(peso);
    }
    
}

//respuesta a la consulta
formulario.addEventListener('submit', (e =>{
    e.preventDefault();
    const mascotaAMostrar = new Mascota(nombre.value, tipo.value, edad.value, tamanio.value, peso.value, marca.value, cantidad);

let mostrarResultado = `
        <div>
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

$('#agregar').click(() =>{agregar()

function agregar(){
    const agregarMascota = localStorage.setItem(mascotaAMostrar.nombre, JSON.stringify(mascotaAMostrar));
    
    let mostrarMascota = JSON.parse(localStorage.getItem(mascotaAMostrar.nombre));

    let mostrarMascotaGuardada = `
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
`;
  
    datosGuardado.innerHTML = mostrarMascotaGuardada;

    $('#eliminar').click(() =>{eliminar()
    
    function eliminar() {
        datosGuardado.innerHTML = "";
        localStorage.removeItem(mascotaAMostrar.nombre);
    }})
    
}});

$('#clear').click(() =>{limpiar()
    
    function limpiar(){
        datosResultado.innerHTML = "";
    }
})
}));

