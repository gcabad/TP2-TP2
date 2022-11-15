const fs = require('fs')

let info = {
    contenidoStr: null,
    contenidoObj: null,
    size: null
}

let archivo = 'package.json'

function readFilePromise(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (error, datos) => {
            if(error) reject(error)
            else resolve(datos)
        })
    })
}

function statFilePromise(file) {
    return new Promise((resolve, reject) => {
        fs.stat(file, (error, resultado) => {
            if(error) reject(error)
            else resolve(resultado)
        })
    })
}

function writFilePromise(file, object) {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, JSON.stringify(object), (error) => {
            if(error) reject(error)
            else resolve("Archivo guardado con exito!")
        })
    })
}
readFilePromise(archivo)
.then( datos => { 
    info.contenidoStr = datos
    return readFilePromise(archivo)
})
.then( datos => { 
    info.contenidoObj = JSON.parse(datos)
    return statFilePromise(archivo)
})
.then( datos => { 
    info.size = datos.size 
    console.log(info)
    return writFilePromise("info_ms.txt", info)
})
.then( resultado => { 
    console.log(resultado)
})
.catch(error => console.log(error))