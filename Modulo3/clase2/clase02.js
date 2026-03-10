

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

//OPERADORES MAT
//+
//CONCATENAR O UNIR DOS CADENAS DE TEXTO
//CONSOLE.LOG ("HOLA" + "MUNDO")
//CAMBIAR UN STRING A NUMERO

let numMat = "2150"
console.log(+numMat) //mutando la variable original
console.log(numMat++) //incremento
console.log(numMat)
console.log(numMat + 200)

//resta - 
console.log(numMat--)
console.log(numMat)
console.log(200 - 2)

//multi *
//cambio de tipos
console.log(20 * "4")

//modulo %
//residuo de una division
console.log(20 % 2)

//division
console.log(20 / 2)

//Metodo para Matematicas Avanzadas
//Math.florr Math.slice //algoritmo de ordenar valores
// if : Estructuras de control
//SINTAXIS BASICA

/* if (vealuar una condicion === ture) {
    //ejecutar lo que aqui este dentro 
    console.log("hola")
}*/

if (pedro <= 15){
    console.log("pedro es gay")
}

if (juan >= 15){
    console.log("juan es mas gay")
}

//ELSE

if (juan > 20){
    console.log("pedro es gay")
}
else {
    console.log("juan es mas gay")
}

//ELSE IF
if(pedro < 15){
    console.log("pedro es menor de 15")
} else if (pedro > 15){
    console.log("pedro es mayor de 15")
} else if(pedro === 15){
    console.log("pedro es igual a 15")
} else {
    console.log("pedro no tiene datos")
}