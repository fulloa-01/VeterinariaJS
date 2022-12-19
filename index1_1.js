const { registrar, leer } = require('./funciones.js')

// pasaremos los argumentos usando la linea de comandos de Node
const argumentos = process.argv.slice(2)  


const operacion = argumentos[0];
const nombre = argumentos[1];
const edad = argumentos[2];
const tipo = argumentos[3];
const color = argumentos [4];
const enfermedad = argumentos [5];


if (operacion === "registrar" && argumentos.length == 6){
    registrar(nombre, edad, tipo, color, enfermedad)
}
else if (operacion === "leer"){
    leer()
}
else {
    console.log("Debes ingresar todos los parametros, según la instrucción del desafío")
}

