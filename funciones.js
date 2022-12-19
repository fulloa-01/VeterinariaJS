
const fs = require('fs')
const citas = require('./citas.json')

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    let objetoCita = {
        "nombre": nombre, 
        "edad": edad, 
        "tipo": tipo, 
        "color": color, 
        "enfermedad": enfermedad
    }
    citas.push(objetoCita)
    fs.writeFileSync('citas.json', JSON.stringify(citas))
}
const leer = () => {
    const agenda = fs.readFileSync('citas.json', 'utf-8')
    const agendaPacientes = JSON.parse(agenda)
    console.log(agendaPacientes)
   
}
module.exports = { registrar, leer }