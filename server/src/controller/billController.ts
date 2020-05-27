import { Request, Response } from "express";
import db from "../database";

class BillController {

  public async getBillById(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    console.log(id);
    const products = await db.query(
      "select u.user_name,od.units,od.kilos, p.name_product, od.price, o.created_at " +
      "from users as u INNER JOIN products as p ON u.id_user = p.id_provider " +
      "INNER JOIN ordersDetails as od ON p.id_product = od.id_product INNER JOIN orders as o ON o.id_order = od.id_order " +
      "where od.id_order =" +[id]  ,
        function (err, result, fields) {
            if (err) throw err;
            if (result.length > 0) {
              res.json(result);
            } else {
            res.status(404).json({ text: "error al obtener resultados" });
            }
        }
    );
  }

   public async create(req: Request, res: Response): Promise<void> {
    await db.query("INSERT INTO orders set ?", [req.body]);
    await db.query("SELECT MAX(id_order) AS id FROM orders",
        function (err, result, fields) {
            if (err) throw err;
            if (result) {
            res.json(result);
            } else {
            res.status(404).json({ text: "obteniendo factura" });
            }
        }
    );
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await db.query("DELETE FROM orders WHERE id_order = ?", [id]);
    res.json({ mensaje: "Eliminando la factura con id " + req.params.id });
  }

  public async getHistoyShoppingByIdUser(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    console.log(id);
    const listProducts = await db.query(
        "select o.id_order, u.user_name, u.user_surnames, o.price , o.created_at from users as u INNER JOIN orders as o " +
        " ON u.id_user = o.id_user " +
        " where u.id_user = "+ [id]  + " order by created_at desc",
        function (err, result, fields) {
            if (err) throw err;
            if (result.length > 0) {
              res.json(result);
            } else {
            res.status(404).json({ text: "error al obtener ultimas compras" });
            }
        }
    );
  }


}

const billController = new BillController();
export default billController;
