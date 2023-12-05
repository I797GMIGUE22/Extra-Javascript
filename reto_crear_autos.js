const autos = [];

class Auto{
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
}

function main(){
    alert("Bienvenido a crea tus carros :b");
    const cantidadDeCarros = parseInt(prompt("Cuantos carros quieres crear?"));
    for(let i = 0; i < cantidadDeCarros; i++){
        const marca = prompt("Di la marca de tu carro");
        const modelo = prompt("Di el modelo de tu carro");
        const año = parseInt(prompt("Di el año de fabricación"));
        autos.push(new Auto(marca, modelo, año));
        alert(`Tu Carro: Marca: ${marca} - Modelo: ${modelo} - Año: ${año}`);
        console.clear;
        console.log(`Tu Carro: Marca: ${marca} - Modelo: ${modelo} - Año: ${año}`);
    }
    console.clear()
    console.log("Registro de autos creados:");
    console.log("");
    autos.forEach((auto) => {
        console.log(`El auto #${autos.indexOf(auto) + 1} tiene las siguientes características:`);
        console.log(`La marca es ${auto.marca}`);
        console.log(`El modelo es ${auto.modelo}`);
        console.log(`El año de fabricación es ${auto.año}`);
        console.log("");
    })
}

main();