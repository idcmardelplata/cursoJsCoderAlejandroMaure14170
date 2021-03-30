//constantes

const formulario = document.getElementById("form-group");
const nombre = formulario.nombre;
const tipo = formulario.tipo;
const edad = formulario.edad;
const tamanio = formulario.tamanio;
const peso = formulario.peso;
const marca = formulario.marca;
const datosResultado = document.getElementById("resultado");
const datosGuardado = document.getElementById("petData");



//clases
//creacion del objeto mascota
class Mascota{
    constructor(nombre, tipo, edad, tamanio, peso, marca){
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;
        this.tamanio = tamanio;
        this.peso = peso;
        this.marca = marca;
    }
    cantidadDeComida(){
        return this.peso * 10 * 3;
    }
}

//funciones
//calculo cantidad de comida


//respuesta a la consulta
formulario.addEventListener('submit', (e =>{
    e.preventDefault();
    const mascotaAMostrar = new Mascota(nombre.value, tipo.value, edad.value, tamanio.value, peso.value, marca.value);

let mostrarResultado = `
<p>Nombre: ${mascotaAMostrar.nombre}</p><br> 
<p>Tipo: ${mascotaAMostrar.tipo}</p><br> 
<p>Edad: ${mascotaAMostrar.edad}</p><br> 
<p>Tamano: ${mascotaAMostrar.tamanio}</p><br> 
<p>Peso: ${mascotaAMostrar.peso}Kg.</p><br>
<p>Marca de Alimento: ${mascotaAMostrar.marca}</p><br>
<p>Cantidad de Alimento: ${mascotaAMostrar.cantidadDeComida()} gr.</p><br>
<button class="save-btn" id="agregar"> Guardar Mascota </button>
<button class="input-button" id="clear">Limpiar Busqueda</button>
`;

datosResultado.innerHTML = mostrarResultado;

formulario.reset();

document.getElementById('agregar').addEventListener('click', () =>{agregar()

function agregar(){
    const agregarMascota = localStorage.setItem(mascotaAMostrar.nombre, JSON.stringify(mascotaAMostrar));
    
    let mostrarMascota = JSON.parse(localStorage.getItem(mascotaAMostrar.nombre));

    let mostrarMascotaGuardada = `
<p>Nombre: ${mostrarMascota.nombre}</p><br> 
<p>Tipo: ${mostrarMascota.tipo}</p><br> 
<p>Edad: ${mostrarMascota.edad}</p><br> 
<p>Tamano: ${mostrarMascota.tamanio}</p><br> 
<p>Peso: ${mostrarMascota.peso}Kg.</p><br>
<p>Marca de Alimento: ${mostrarMascota.marca}</p><br>
`;
    
    
    
    datosGuardado.innerHTML = mostrarMascotaGuardada;
    
}});

document.getElementById('clear').addEventListener('click', () =>{limpiar()
    
    function limpiar(){
        datosResultado.innerHTML = "";
    }
    
})



}))

