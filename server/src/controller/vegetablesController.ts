import { Request, Response } from "express";
import db from "../database";
class VegetablesController {
  public async list(req: Request, res: Response) {
    await db.query("SELECT * FROM products", function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  }

  public async getOne(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const products = await db.query(
      "SELECT * FROM products WHERE id = ?",
      [id],
      function (err, result, fields) {
        if (err) throw err;
        if (result.length > 0) {
          res.json(result);
        } else {
          res.status(404).json({ text: "no existe el producto con ese id" });
        }
      }
    );
  }

  public async create(req: Request, res: Response): Promise<void> {
    await db.query("INSERT INTO products set ?", [req.body]);
    res.json({ mensaje: "Verdura creada" });
  }

  public update(req: Request, res: Response) {
    res.json({ texto: "Actualizando la verdura " + req.params.id });
  }

  public delete(req: Request, res: Response) {
    res.json({ texto: "Eliminando la id " + req.params.id });
  }
}

const vegetablesController = new VegetablesController();
export default vegetablesController;
