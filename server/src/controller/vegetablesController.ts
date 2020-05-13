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
      "SELECT * FROM products WHERE id_product = ?",
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
    res.json({ mensaje: "Producto creado" });
  }

  public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await db.query("UPDATE products set ? where id_product = ?",[req.body, id]);
    res.json({ mensaje: "Actualizando el producto con id " + req.params.id });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await db.query("DELETE FROM products WHERE id_product = ?", [id]);
    res.json({ mensaje: "Eliminando el producto con id " + req.params.id });
  }

   public async getListUniqueProducts(req: Request, res: Response) {
    await db.query("SELECT DISTINCT name_product, product_description, image from products;", 
    function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  }
  
}

const vegetablesController = new VegetablesController();
export default vegetablesController;
