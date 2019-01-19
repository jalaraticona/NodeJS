const fs = require('fs');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base introducida ${ base } no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${ limite } no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base*i }\n`;
            //console.log(`${ base } * ${ i } = ${ base*i }`);
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${ base }.txt`)
        });
    });
}

let listarTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {
        // data += `${ base } * ${ i } = ${ base*i }\n`;
        console.log(`${ base } * ${ i } = ${ base*i }`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}