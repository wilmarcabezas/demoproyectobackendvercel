import express from 'express';
import {client} from '../database/database.js';

const router = express.Router();


router.get('/', async(req,res)=>{

    const resultadoConsulta = await client.query('select * from products');
    res.json(resultadoConsulta.rows);
})

export default router;