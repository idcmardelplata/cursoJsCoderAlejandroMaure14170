//variables

//De los datos ingresados
let datosNombre = document.getElementById("datosNombre").value;
let datosTipo = document.getElementById("datosTipo").value;
let datosEdad = document.getElementById("datosEdad").value;
let datosTamano = document.getElementById("datosTamano").value;
let datosPeso = document.getElementById("datosPeso").value;
let datosMarca = document.getElementById("datosMarca").value;

//ingresar
let mascotaIngresada = '';




//funciones
    function mostrarResultado() {
        mostrar = document.getElementById("result")
        mostrarNombre = "<p>" + datosNombre + "</p>"
        mostrarTipo = "<p>" + datosTipo + "</p>"
        mostrarEdad = "<p>" + datosEdad + "</p>"
        mostrarTamano = "<p>" + datosTamano + "</p>"
        mostrarPeso = "<p>" + datosPeso+ "</p>"
        mostrarMarca = "<p>" + datosMarca + "</p>"
    }
    window.onload = () => {document.guardado.guardar.onclick = mostrarResultado};
    

let guardar = document.getElementById("guardar");
guardar.addEventListener("click", mostrarResultado);





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

