//mascotas que se muestran se guardaran en el localstorage
let mascota1;




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
    
    let nombre = prompt("Como se llama tu mascota?");
    let tipo = prompt(nombre + " es perro o gato?");
    let edad = prompt(nombre + " es cachorro o adulto?");
    let tamano = prompt(nombre + " es chico, mediano o grande?");
    let peso = parseInt(prompt(nombre + "Cuanto pesa (kg)? Ej 1, 2, 3, etc"));
    let marca = prompt("Que marca de alimento balanceado le estas dando?");
        
mascota1 = new Mascota(nombre, tipo, edad, tamano, peso, marca);


const mascotas = [];
mascotas.push(new Mascota(nombre, tipo, edad, tamano, peso, marca));


alert("Datos de mascota: " + "Nombre: " + mascota1.nombre+ ". " + "Tipo: " + mascota1.tipo + ". " + "Edad: " + mascota1.edad + ". " + "Tamano: " + mascota1.tamano + ". " + "Peso: " + mascota1.peso + " (Kg)" +". " + "Marca de Balanceado: " + mascota1.marca + ". " + "Cantidad de Balanceado: " + mascota1.cantidadDeComida() + "Grs. Dividido 3 Veces por Dia.");
console.log(mascotas.sort());