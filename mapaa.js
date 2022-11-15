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

async function ejecutar() {

    try {
        let datos = await readFilePromise(archivo) 
        info.contenidoStr = datos
        
        datos = await readFilePromise(archivo)
        info.contenidoObj = JSON.parse(datos)

        datos = await statFilePromise(archivo)
        info.size = datos.size 
        console.log(info)
        
        resultado = await writFilePromise("info_ms.txt", info)
        console.log(resultado)
    }
    catch(error) {
        console.log(error)
    }
}

ejecutar()