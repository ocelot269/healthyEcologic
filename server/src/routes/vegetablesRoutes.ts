import {Router} from 'express';
import vegetablesController from '../controller/vegetablesController';
class VegetablesRoutes {

    public router: Router = Router();

    constructor() {
       this.config();
    }

    config(): void {
         this.router.get('/', vegetablesController.index);
    }
    
}

const vegetablesRoutes = new VegetablesRoutes();
export default vegetablesRoutes.router;