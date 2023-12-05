//TODO: DATA TYPES IN JAVASCRIPT

//? tipo de dato primitivo:

//* Type Number

a = 9

//* Type String

'aguacate' || "palpa" || `Tengo ${a} Aguacates`

//* Type Boolean

true

false

//* Type Undefined = Representa un valor que aun no se ha asignado || o un valor no valido

undefined

//* Type NaN || Not a Number

NaN   //! tipo numérico y representa que no un valor no numérico

//* Type null || Nulo = Representa un valor vacío

null

//? Tipo de dato objeto: (coleccion de datos o funciones )

//* Array

array = [1,2,3,4,5]

//* Object

object = {
    nombre: 'Pablo'
}

//* Function

var funcion = () => console.log('VIVA PETRO')

//* Class

class Carro {
    constructor(color, marca, velocidad){
        this.color = color
        this.marca = marca
        this.velocidad = velocidad
    }
}

//* Date = fechas

Date()

//* ERROR

//* BigInt with n = representan números enteros extremadamente largos

let numeroGrande = 1278723893167n

//* Symbol() = crear valores únicos e inmutables && crear identificadores únicos

const nombre = Symbol()

let obj = {}

obj[nombre] = 'Carlos'