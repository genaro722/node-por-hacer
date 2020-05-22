const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    type: 'boolean'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('borrar', 'Borrar un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado de un elemento por hacer', {
        descripcion,
        completado
    })
    .argv

module.exports = { argv }