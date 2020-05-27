import {Router} from 'express';
import billDetailsController from '../controller/billDetailsController';
class BillDetailsRoutes {

    public router: Router = Router();

    constructor() {
       this.config();
    }

    config(): void {
        //  this.router.get('/bill/id', billDetailsRoutes.getBill),
         this.router.post('/', billDetailsController.create)
         //this.router.delete('/:id', vegetablesController.delete)
    }
    
}

const billDetailsRoutes = new BillDetailsRoutes();
export default billDetailsRoutes.router;