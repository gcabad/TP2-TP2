const fs = require('fs')

let info = {
    contenidoStr: null,
    contenidoObj: null,
    size: null
}

let archivo = 'package.json'

fs.promises.readFile(archivo, 'utf-8')
.then( datos => { 
    info.contenidoStr = datos
    return fs.promises.readFile(archivo, 'utf-8')
})
.then( datos => { 
    info.contenidoObj = JSON.parse(datos)
    return fs.promises.stat(archivo)
})
.then( datos => { 
    info.size = datos.size 
    console.log(info)
    return fs.promises.writeFile("info_ms.txt", JSON.stringify(info))
})
.catch(error => console.log(error))