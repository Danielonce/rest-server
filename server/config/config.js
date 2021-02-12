//Port

process.env.PORT = process.env.PORT || 3000;


process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

process.env.CADUCIDAD_TOKEN = 60*60*24*30;

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'your-local-db'
} else {
    urlDB = 'your-mongoatlas-uri'
}

process.env.URLDB = urlDB;