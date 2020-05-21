import { Request, Response } from "express";
import db from "../database";

class BillDetailsController {

  public async create(req: Request, res: Response): Promise<void> {
    await db.query("INSERT INTO ordersDetails set ?", [req.body]);
    res.json({ mensaje: "Detalle factura creada"});
  }

  

}
const billDetailsController = new BillDetailsController();
export default billDetailsController;