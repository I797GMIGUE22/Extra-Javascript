//TODO: Hoisting

//? Hoisting = llamar una función antes de ser declararla, poderla declarar después de llamarla || es un comportamiento de JavaScript en el que las declaraciones de variables y funciones son movidas al comienzo del ámbito actual antes de que cualquier otro código sea ejecutado.

//! Hoisting funciona solo con var y function y se sube lo mas arriba del scope de donde se encuentren

//* Ejemplo de Hoisting

hey() // llamando a una funcion no declarada asi que sube la declaración de la funcion

function hey() { // toda la funcion hey() se sube para declararse y poder efectuar la llamada
    console.log(`Hola ${nombre}`) // nombre no esta definido por lo tanto se sube y se declara arriba como var nombre = undefined
}

var nombre = 'Miguel'

console.log(nombre)
