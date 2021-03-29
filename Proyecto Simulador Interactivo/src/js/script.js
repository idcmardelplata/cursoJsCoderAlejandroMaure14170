//constantes

const formulario = document.getElementById("form-group");
const nombre = formulario.nombre;
const tipo = formulario.tipo;
const edad = formulario.edad;
const tamanio = formulario.tamanio;
const peso = formulario.peso;
const marca = formulario.marca;
const datosResultado = document.getElementById("resultado");


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
<button type="submit"  class="save-btn" id="save"> Guardar Mascota </button>
<button type="submit"  class="input-button" id="clear">Limpiar Busqueda</button>
`;

datosResultado.innerHTML = mostrarResultado;

formulario.reset();

}))
