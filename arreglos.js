// Este es el archivo de areglos

let nombres = ["Felipe","Danilo","Laura"];

console.log(nombres);


// Agregar elementos al arreglos de nombres
nombres.push("jaider","hernes");
console.log(nombres);

let equipos = ["america","peñarol","pasto","madrid","milan"];

console.log(equipos[1]);


// averiguar el total de elementos
let motos = ["Yamaha","Kawasaki","Honda","Suzuki","Ducati"];

// motos.length
console.log(motos.length);


// Sumar los numeros de un arreglos
let numeros = [2,7,5,3,2];
let suma = numeros.reduce( (acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma);

// Encontrar el número mayor de un arreglo
let numeroMayor = Math.max(...numeros);
console.log(numeroMayor);

// Invertir los textos de un arreglo
let frutas = ["Manzana", "Pera", "Guayaba", "Lulo", "Mango"];
let frutasInvertidas = frutas.slice().reverse();
console.log(frutasInvertidas);

// Agrupar Arreglos en un nuevo arreglo
let mujeres = ["Laura", "Sofia", "Valentina", "Daniela"];
let hombres = ["felipe", "Danilo", "Stywart", "Brayan"];
let Personas = [...mujeres, ...hombres];
console.log(Personas);

// Poner en mayúscula los nombres
let mayusculas  = mujeres[2].toUpperCase();
console.log(mayusculas);