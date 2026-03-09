

const nombre = "Andres Morales"

//var - tipo global
//let

//declarar un valor
let edad = 80
console.log(edad)


//asignacion
edad = 180
console.log(edad)

//caso de LET if

let estalloviendo = undefined

estalloviendo = true
console.log(estalloviendo)

//OPERADORES
//OPERADORES DE COMPARACION
//OPERADORES =, <>
//OPERADORES DE IGUALDAD

const pedro = 10
const juan = 15

console.log(pedro === juan)
console.log(pedro + juan)

//mayor y menor <>
console.log(pedro > juan)
console.log(pedro < juan) 
console.log(pedro >= juan)
console.log(pedro <= juan)  

//OPERADORES LOGICOS

//AND && -- todas las expresiones deben de ser ciertas
console.log(pedro === juan && pedro >= juan) 
//OR || -- al menos una de ellas debe ser ciertas
console.log(pedro === juan || pedro >= juan)
//NOT ! -- invierte el valor (true es false y viciversa)
console.log(!true)
console.log(!false)


console.log(pedro === juan && pedro >= juan && pedro <= juan)
console.log(pedro === juan || pedro >= juan || pedro <= juan)

//casos reales
const estadoCuenta = 0 || "deposita mas dinero"
console.log(estadoCuenta, "edo")
console.log(Boolean(""), "--- Boolean")

//?? Nulish Coalescing Assignment
const estadoCuenta2 = 0 ?? "deposita mas dinero"
console.log(estadoCuenta2, "edo2")


