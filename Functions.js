//TODO: FUNCTIONS TYPES

//? Hoisting = llamar una función antes de ser declararla, poderla declarar después de llamarla || es un comportamiento de JavaScript en el que las declaraciones de variables y funciones son movidas al comienzo del ámbito actual antes de que cualquier otro código sea ejecutado.

//* IIFE (Immediately Invoked Function Expression) = Función que es declarada e invocada a la vez, anónima y no reutilizable

(function () {
    a = 8
    b = 4
    return console.log(a + b)
})()

//* Function statement || declaration = función que se declara y se utiliza en otro momento, no es anónima, es reutilizable y tiene hoisting

//? Ejemplo de Hoisting

sumar(8, 8)

function sumar(a, b) {
    return console.log(a + b)
}

//* Function expression || anónimas = función que se declara como si fuera una variable, comúnmente anónima, reutlizable y sin hoisting

//? Ejemplo de no Hoisting

var funcionResta = function(a, b){
    return console.log(a - b)
}

funcionResta(7, 22)

//* Arrow function = funcion mas concisa y mas util para funciones de una sola linea, anónima, reutilizable y sin hoisting

let saludar = () => console.log('Hola')

saludar()
