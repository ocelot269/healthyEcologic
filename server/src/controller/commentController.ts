import { Request, Response } from "express";
import db from "../database";

class CommentController {

    public async getListCommentByProduct(req: Request, res: Response) {
        const { id } = req.params;
        await db.query("select u.user_name , c.comment, c.created_at " +
        " from users as u INNER JOIN comments as c " + 
        " ON u.id_user = c.id_user " +
        " where c.id_product = ?",[id] , function (err, result, fields) {
        if (err) throw err;
        res.json(result);
        });
    } 

    public async create(req: Request, res: Response): Promise<void> {
        await db.query("INSERT INTO comments set ?", [req.body]);
        console.log(req.body);
        res.json({ mensaje: "comentarios creado" });
    }


    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query("DELETE FROM comments WHERE id_comment = ?", [id]);
        res.json({ mensaje: "Eliminando el comentario con id " + req.params.id });
    }
}

const commentController = new CommentController();
export default commentController;
