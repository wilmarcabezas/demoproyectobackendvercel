import express from 'express';
import cors from 'cors';

import productController from './controllers/productController.js';
import conectar,{client} from './database/database.js';


const app = express();
app.use(cors());

app.use('/products',productController);


const port = 4000;
conectar();


app.listen(port,()=>{
    console.log('listening on port '+port);
});
