const fs = require('fs')

let info = {
    contenidoStr: null,
    contenidoObj: null,
    size: null
}

let archivo = 'package.json'

async function ejecutar() {

    try {
        let datos = await fs.promises.readFile(archivo, 'utf-8') 
        info.contenidoStr = datos
        
        datos = await fs.promises.readFile(archivo, 'utf-8')
        info.contenidoObj = JSON.parse(datos)

        datos = await fs.promises.stat(archivo) 
        info.size = datos.size 
        console.log(info)
        
        await fs.promises.writeFile("info_ms.txt", JSON.stringify(info))

    }
    catch(error) {
        console.log(error)
    }
}

ejecutar()