import {Router} from 'express';
import commentController from '../controller/commentController';
class CommentRoutes {

    public router: Router = Router();

    constructor() {
       this.config();
    }

    config(): void {
         this.router.get('/:id', commentController.getListCommentByProduct),
         this.router.post('/', commentController.create),
         this.router.delete('/:id', commentController.delete)
    }   
    
}

const commentRoutes = new CommentRoutes();
export default commentRoutes.router;