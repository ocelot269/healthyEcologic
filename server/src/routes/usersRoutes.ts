import {Router} from 'express';
import usersController from '../controller/usersController';

class UsersRoutes {

    public router: Router = Router();

    constructor() {
       this.config();
    }

    config(): void {
        this.router.get('/', usersController.list),
        this.router.get('/products/:id', usersController.obteinAllProductProvider),
        this.router.get('/:id', usersController.getOne),
        this.router.post('/login', usersController.getUserByUserNamePass),
        this.router.post('/', usersController.create),
        this.router.put('/:id', usersController.update),
        this.router.delete('/:id', usersController.delete)
    }
    
}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;