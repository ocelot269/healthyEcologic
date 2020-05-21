import {Router} from 'express';
import billController from '../controller/billController';
class BillRoutes {

    public router: Router = Router();

    constructor() {
       this.config();
    }

    config(): void {
        //  this.router.get('/:id', billController.getBill),
         this.router.post('/', billController.create),
         this.router.delete('/:id', billController.delete)
    }   
    
}

const billRoutes = new BillRoutes();
export default billRoutes.router;