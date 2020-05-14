import {Router} from 'express';
import vegetablesController from '../controller/vegetablesController';
class VegetablesRoutes {

    public router: Router = Router();

    constructor() {
       this.config();
    }

    config(): void {
         this.router.get('/', vegetablesController.list),
         this.router.get('/listProduct', vegetablesController.getListUniqueProducts),
         this.router.get('/:id', vegetablesController.getOne),
         this.router.post('/', vegetablesController.create),
         this.router.put('/:id', vegetablesController.update),
         this.router.delete('/:id', vegetablesController.delete)
    }
    
}

const vegetablesRoutes = new VegetablesRoutes();
export default vegetablesRoutes.router;