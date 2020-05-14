import { Request, Response } from "express";
import db from "../database";

class UsersController {
  public async list(req: Request, res: Response) {
    await db.query("SELECT * FROM users", function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  }

  public async getOne(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    console.log(req.params)
    const products = await db.query(
      "SELECT * FROM users WHERE id_user = ?",
      [id],
      function (err, result, fields) {
        if (err) throw err;
        if (result.length > 0) {
          res.json(result);
        } else {
          res.status(404).json({ text: "no existe el usuario" });
        }
      }
    );
  }

  public async create(req: Request, res: Response): Promise<void> {
    await db.query("INSERT INTO users set ?", [req.body]);
    console.log(req.body);
    res.json({ mensaje: "usuario creado" });
  }

    public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await db.query("UPDATE users set ? where id_user = ?",[req.body, id]);
    res.json({ mensaje: "Actualizando el usuario con id " + req.params.id });
  }

   public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await db.query("DELETE FROM users WHERE id_user = ?", [id]);
    res.json({ mensaje: "Eliminando la id " + req.params.id });
  }

   public async obteinAllProductProvider(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await db.query("SELECT u.user_name , p.name_product , p.units , p.price , p.kilos FROM users as u INNER JOIN products as p ON u.id_user = p.id_provider WHERE u.id_user = ?", [id],
    function (err, result, fields) {
        if (err) throw err;
        if (result.length > 0) {
          res.json(result);
        } else {
          res.status(404).json({ text: "no tiene productos asociados" });
        }
      });
    
  }  
}

const usersController = new UsersController();
export default usersController;
