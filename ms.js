const fs = require('fs')

function leerArchivoComoString(ruta) {

    try { 
        return fs.readFileSync(ruta, 'utf-8')
    }
    catch (error) {
        console.log(`Error en operacion sincronica de lectura: ${error.message}`)
    }
}

function escribirTextoEnArchivo(ruta, texto) {
    try
    {
        fs.writeFileSync(ruta, texto)
    }
    catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

let info = {
    contenidoStr: leerArchivoComoString("package.json"),
    contenidoObj: JSON.parse(leerArchivoComoString("package.json")),
    size: fs.statSync("package.json").size
   }

console.log(info)

try {
    escribirTextoEnArchivo("info_ms.txt", JSON.stringify(info))
    console.log("El archivo ha sido guardado exitosamente.")
} catch (error) {
    console.log("Ocurrió un error intentando guardar el objeto info en el archivo:")
    console.log(error.message)
}
