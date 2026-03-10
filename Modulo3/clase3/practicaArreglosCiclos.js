/*Arreglos y cliclos
En este proyecto, practicarás los conceptos básicos de arrays (arreglos) y loops (ciclos), que has visto hasta este momento.

Objetivo
El objetivo es agregar un archivo a tu repositorio y que contenga la solución al problema planteado a continuación.

Problema: Clasificación de Frutas
Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.*/

//Declara un arreglo llamado frutas con varios tipos de frutas.
const frutas = [
    'manzana', 'platano', 'pera', 'naranja', 'fresa', 'manzana', 'pera', 'platano', 'manzana', 'uva',
    'naranja', 'platano', 'fresa', 'manzana', 'uva', 'pera', 'naranja', 'platano', 'fresa', 'kiwi',
    'manzana', 'platano', 'pera', 'naranja', 'fresa', 'manzana', 'pera', 'platano', 'manzana', 'uva',
    'naranja', 'platano', 'fresa', 'manzana', 'uva', 'pera', 'naranja', 'platano', 'fresa', 'kiwi',
    'manzana', 'platano', 'pera', 'naranja', 'fresa', 'manzana', 'pera', 'platano', 'manzana', 'uva',
    'naranja', 'platano', 'fresa', 'manzana', 'uva', 'pera', 'naranja', 'platano', 'fresa', 'kiwi',
    'manzana', 'platano', 'pera', 'naranja', 'fresa', 'manzana', 'pera', 'platano', 'manzana', 'uva',
    'naranja', 'platano', 'fresa', 'manzana', 'uva', 'pera', 'naranja', 'platano', 'fresa', 'kiwi',
    'manzana', 'platano', 'pera', 'naranja', 'fresa', 'manzana', 'pera', 'platano', 'manzana', 'uva',
    'naranja', 'platano', 'fresa', 'manzana', 'uva', 'pera', 'naranja', 'platano', 'fresa', 'kiwi',
    'manzana', 'platano', 'pera', 'naranja', 'fresa', 'manzana', 'pera', 'platano', 'manzana', 'uva',
    'naranja', 'platano', 'fresa', 'manzana', 'uva', 'pera', 'naranja', 'platano', 'fresa', 'kiwi',
    'manzana', 'platano', 'pera', 'naranja', 'fresa', 'manzana', 'pera', 'platano', 'manzana', 'uva',
    'naranja', 'platano', 'fresa', 'manzana', 'uva', 'pera', 'naranja', 'platano', 'fresa', 'kiwi',
    'manzana', 'platano', 'pera', 'naranja', 'fresa', 'manzana', 'pera', 'platano', 'manzana', 'uva'
];

//Crea un objeto para almacenar la cantidad de cada tipo de fruta.
const contadorFrutas = {};

//Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
for (let i = 0; i < frutas.length; i++) {
    const frutaActual = frutas[i];

    // Si la fruta ya existe en nuestro objeto, le sumamos 1
    if (contadorFrutas[frutaActual]) {
        contadorFrutas[frutaActual]++;
    } else {
        // Si no existe, la agregamos empezando en 1
        contadorFrutas[frutaActual] = 1;
    }
}

//Imprime en la consola la cantidad de cada tipo de fruta.
console.log(contadorFrutas);