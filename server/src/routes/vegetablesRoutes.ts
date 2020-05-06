import {Router} from 'express';

class VegetablesRoutes {

    public router: Router = Router();

    constructor() {
       this.config();
    }

    config(): void {
         this.router.get('/',(req, res) => res.send('verduritas frescas'));
    }
    
}

const vegetablesRoutes = new VegetablesRoutes();
export default vegetablesRoutes.router;