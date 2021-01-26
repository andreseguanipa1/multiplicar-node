const {crearArchivo} = require('./multiplicar/multiplicar');
const {listarTabla} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs.js').argv;

const comando = argv._[0];

switch(comando){

    case 'listar':
        console.log('Tabla del' + argv.limite + '/n');
        listarTabla(argv.base,argv.limite);
    break;

    case 'crear':
        crearArchivo(argv.base,argv.limite)
        .then(archivo=>console.log(`Archivo creado: ${archivo}`))
        .catch(e => console.log(e));
    break;

    default:
        console.log('No se reconoce el comando');
    break;
}



