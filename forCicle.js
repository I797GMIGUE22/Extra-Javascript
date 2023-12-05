let numeros = {
    numero1A10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    numero11A20: [11,12,13,14,15,16,17,18,19,20]
}

//? For in = recorrer cada propiedad y regresa el nombre de cada propiedad dentro de un objeto

for(let numero in numeros){
    console.log(numero)
}

//? for of = recorre cada valor de un objeto iterable

for(let numero of numeros['numero1A10']){
    console.log(numero)
}
