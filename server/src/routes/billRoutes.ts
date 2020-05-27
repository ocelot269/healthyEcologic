import {Router} from 'express';
import billController from '../controller/billController';
class BillRoutes {

    public router: Router = Router();

    constructor() {
       this.config();
    }

    config(): void {
         this.router.get('/:id', billController.getBillById),
         this.router.post('/', billController.create),
         this.router.delete('/:id', billController.delete),
         this.router.get('/history/:id', billController.getHistoyShoppingByIdUser)
    }   
    
}

const billRoutes = new BillRoutes();
export default billRoutes.router;