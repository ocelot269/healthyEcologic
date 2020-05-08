import {Request , Response} from 'express';
import db from '../database';
class VegetablesController {

    public index (req:Request, res:Response) {
       db.query('DESCRIBE vegetables')
       res.json('vegetables') 
    } 
}

const vegetablesController = new VegetablesController();
export default vegetablesController;