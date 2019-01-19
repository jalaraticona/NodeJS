//requires
// const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

// console.log(argv);

let comando = argv._[0];
console.log(comando);

switch (comando) {
    case 'listar':
        // console.log('Listar0');
        console.log(argv.base);
        console.log(argv.limite);
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        // console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}

// let base = 10;

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(argv.base);
// console.log('Limite', argv.limite);
// console.log(argv2);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));