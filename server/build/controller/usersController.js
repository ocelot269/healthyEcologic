"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("../auth"));
const database_1 = __importDefault(require("../database"));
class UsersController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("SELECT * FROM users", function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(req.params);
            const products = yield database_1.default.query("SELECT * FROM users WHERE id_user = ?", [id], function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    res.json(result);
                }
                else {
                    res.status(404).json({ text: "no existe el usuario" });
                }
            });
        });
    }
    getUserByUserNamePass(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * FROM users WHERE user_name = ?', req.body.user_name, function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    auth_1.default.compare(req.body.password, result[0].password).then((validUser) => {
                        console.log(result);
                        if (validUser) {
                            res.json(result);
                        }
                        else {
                            res.json({ message: 'contraseña incorrecta' });
                        }
                    });
                }
                else {
                    res.json({ message: 'El usuario ' + req.body.user_name + ' No existe' });
                }
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let newUser;
            auth_1.default.encryptPassword(req.body.password).then((hash) => {
                newUser = {
                    user_name: req.body.user_name,
                    user_type: req.body.user_type,
                    user_surnames: req.body.user_surnames,
                    user_email: req.body.user_email,
                    user_description: req.body.user_description,
                    user_gender: req.body.user_gender,
                    phone: req.body.phone,
                    direction: req.body.direction,
                    password: hash
                };
                database_1.default.query("INSERT INTO users set ?", newUser);
            });
            res.json({ mensaje: "usuario creado" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("UPDATE users set ? where id_user = ?", [req.body, id]);
            res.json({ mensaje: "Actualizando el usuario con id " + req.params.id });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("DELETE FROM users WHERE id_user = ?", [id]);
            res.json({ mensaje: "Eliminando la id " + req.params.id });
        });
    }
    obteinAllProductProvider(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("SELECT u.user_name , p.id_product ,p.name_product , p.product_description, p.image, p.units , p.price , p.kilos FROM users as u INNER JOIN products as p ON u.id_user = p.id_provider WHERE u.id_user = ?", [id], function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    res.json(result);
                }
                else {
                    res.status(404).json({ text: "no tiene productos asociados" });
                }
            });
        });
    }
}
const usersController = new UsersController();
exports.default = usersController;
