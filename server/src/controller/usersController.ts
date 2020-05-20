import { Request, Response } from "express";
import Auth from '../auth';
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


     public async getUserByUserNamePass (req : Request, res : Response): Promise<any>{
        
        const users = await db.query('SELECT * FROM users WHERE user_name = ?', req.body.user_name,function (err, result, fields) {
          if (err) throw err;
          if (result.length > 0) {
            Auth.compare(req.body.password,result[0].password).then((validUser) => {
                    console.log(result);
                    if(validUser){
                        res.json(result);    
                    }
                    else{
                        res.json({message: 'contraseña incorrecta'}); 
                    }
              });
            } else {
                res.json({message: 'El usuario ' + req.body.user_name + ' No existe' }); 
            }
          }
        );
    }

  public async create(req: Request, res: Response): Promise<void> {
    let newUser ;
    Auth.encryptPassword(req.body.password).then((hash) => {
         newUser ={
            user_name: req.body.user_name,
            user_type: req.body.user_type,
            user_surnames: req.body.user_surnames,
            user_email: req.body.user_email,
            user_description: req.body.user_description,
            user_gender: req.body.user_gender,
            password: hash
        }
        db.query("INSERT INTO users set ?", newUser);
    });

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
    await db.query("SELECT u.user_name , p.id_product ,p.name_product , p.product_description, p.image, p.units , p.price , p.kilos FROM users as u INNER JOIN products as p ON u.id_user = p.id_provider WHERE u.id_user = ?", [id],
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
