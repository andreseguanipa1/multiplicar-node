const fs = require('fs');

const crearArchivo = (base,limite) =>{

    return new Promise((resolve,reject) => {

        if (!Number(base)){
            reject('El valor introducido no es un número');
            return;
        }

        let data = '';
    
        for (let i=1; i<(limite+1); i++){
            data += `${base} * ${i} = ${base*i}\n`;
        }
    
        fs.writeFile(`tablas/tabla-${base}.txt`,data,(err) => {
    
            if (err) {
                reject (err)
            }
            else{
                resolve(`El archivo tabla-${base}.txt ha sido creado`)
            }

    
        });
    
    }) 

}

const listarTabla = (base,limite) => {

    const tabla = '';
     
    for (let i=1; i<(limite+1); i++){
        console.log(`${base} * ${i} = ${base*i}\n`);
    }

}

module.exports = {
    crearArchivo,
    listarTabla
}

