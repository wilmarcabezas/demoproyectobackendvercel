import pkg from 'pg';
const {Client}= pkg;

const connectionString ='postgres://default:B1CGPgAHOku6@ep-rough-cell-a4wy458s.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require'

const client = new Client({
    connectionString,
})

const conectar = ()=>{
   client.connect()
   .then(()=>{console.log('Conectado a la base de datos')}) 
   .catch((error)=>{console.log(error)});
}

export default conectar;
export {client};