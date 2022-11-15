const fs = require('fs')

let info = {
    contenidoStr: null,
    contenidoObj: null,
    size: null
}

fs.readFile("package.json", 'utf-8', (error, datos) => { 
    if (error) throw new Error(`Error en lectura de archivo: ${error.message}`)
    info.contenidoStr = datos
    
    fs.readFile("package.json", 'utf-8', (error, datos) => {
        if (error) throw new Error(`Error convertiendo el String a JSON.`)
        info.contenidoObj = JSON.parse(datos)

        fs.stat("package.json", (error, resultado) => {
            if (error) throw new Error(`Error obteniedno el size.`)
            info.size = resultado.size 

            fs.writeFile("info_ms.txt", JSON.stringify(info), (error) => {
                console.log(info)
                if (error) throw new Error(`Error grabando el archivo`)
                else {
                    console.log("Archivo guardado con exito!")
                }
            })
        })
    })
})

