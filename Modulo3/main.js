console.log("hola mundo")
console.error("hola mundo, como estan?") //para mostar en consola si hubo un error
console.warn("error, señor")
console.table(["apples","oranges", "bananas"]);

// <-- para crear comentarios
// Tipos de datos Javascript
//let
//const
//var

// Tipos Primitivos

//Number
const edad = 80
console.log(edad, "---- edad", typeof edad)

const dolar = 17.80
console.log(dolar, "---- dolar", typeof dolar)

//string a numeros
const edad10 = Number(edad) + 10
console.log(parseInt(edad))
console.log(+edad, "usando mas")


//PROMPT: QUE HACE ESTA LINEA Y DAME EJEMPLOS DE USO Y DATOS CURIOSOS
console.log(edad10, "edad en 10 años")

//string //texto
const nombre = "Andres Morales"
console.log(nombre, "---- nombre", typeof nombre)
console.log(nombre +" Cicero")

//Boolean //true or false
const estanublado = true
console.log(estanublado, "---- estanublado", typeof estanublado)

//Undefined
//Null
const calificacion = null
console.log(calificacion, "---- calificacion", typeof calificacion)


//*Menos Usados*//
//BigInt
//Symbol -<valor unico id, de una lista personal, Reac

//Tipos Complejos

//Array, Matriz, Slice

const alumnos = ["victor", "Julia", "Luis", "Andres"]
// index            0         1       2        3
console.log(alumnos, length, Array.isArray(alumnos))

//interamos elementos de un arreglo
//acceder a los elementos de un arreglo

console.log(alumnos[0], "index 2")
console.log(alumnos[1])
console.log(alumnos[2])
console.log(alumnos[3])

//objetos

//descripcion de una casa
const casa = {
    cuartos: 4,
    puertas: 10,
    direccion: "herradura II",
    color: "rojo",
    ventanas: 6,
    cocina: true,
}

//concatenando texto y accediendo al valor del objeto
console.log("la casa tiene ", casa.puertas, " puertas")

//Objetos

const alumno = {
    "nombre": "Andres",
    "batch": 26,
    "product_line": "frontend",
    "email": "andrucice@gmail.com"
}

const devf_alumnos = [
    alumno, 
]

console.log(devf_alumnos, typeof devf_alumnos)

//Funciones