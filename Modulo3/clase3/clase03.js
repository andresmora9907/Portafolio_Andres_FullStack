console.log("Clase 3 - Arreglos")

/*let contador = 0
while (contador <= 100 ){
    console.log("dentro del ciclo while", contador)

    contador = contador + 1
}

let contadorFor = 0
for (contadorFor; contadorFor <= 200; contadorFor++){
    console.log("dentro del ciclo for", contadorFor)
}*/

const recaudacion = ['manzana','platanos','peras','naranjas','cerezas','fresas']
const productoBuscado = 'calabaza'
recaudacion[9] = 'calabaza'
let encontrado = false
//consultar base de datos
//poder manejar esa cantidad de datos
//ejecutar operaciones
//siempre desde 0
//se puede hacer un buscador, acomodador, validacion

for (let i = 0; i < recaudacion.length; i++){
    const fruta = recaudacion[i]
    console.log(fruta, '---', i)

    if (fruta === productoBuscado) {
        console.log("¡Encontrado! La " + productoBuscado + " está en la posición: " + i)
        encontrado = true
        break
    }
}

if (!encontrado) {
    console.log("El producto " + productoBuscado + " no está en la lista")
}

const compras = ['pan', 'leche', 'huevos'];
compras[1] = 'jugo';


const equipo = ['Andrés', 'Maru', 'Juan'];
equipo[3] = 'Pedro';

const frutas = ['manzana', 'pera'];
frutas[5] = 'calabaza';

console.log(frutas); 
// Resultado: ['manzana', 'pera', <3 espacios vacíos>, 'calabaza']
console.log(frutas.length); // El tamaño ahora es 6

//METODOS DE ARREGLOS
//añadir elementos dentro de un arreglo
//push()    
recaudacion.push('coco')
console.log(recaudacion)
recaudacion.push('mango')
console.log(recaudacion)

recaudacion[1] = 'uva'
console.log(recaudacion)

frutas[2] = 'pepino'
console.log(frutas);

//añadir elementos al principio del arreglo
//unshift()
recaudacion.unshift('uva')
console.log(recaudacion)

//eliminar elementos de un arreglo
//se elimina el ultimo elemento
//pop()
const ultimoElemento = recaudacion.pop()
console.log(recaudacion)
//asignamos el valor que se elimina
console.log(ultimoElemento)
recaudacion.pop()
console.log(recaudacion)

//shift
//elimina el primer elemento del arreglo
recaudacion.shift()
console.log(recaudacion)
