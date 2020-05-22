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
const database_1 = __importDefault(require("../database"));
class BillController {
    getBillById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(id);
            const products = yield database_1.default.query("select u.user_name,od.units,od.kilos, p.name_product, od.price, o.created_at " +
                "from users as u INNER JOIN products as p ON u.id_user = p.id_provider " +
                "INNER JOIN ordersDetails as od ON p.id_product = od.id_product INNER JOIN orders as o ON o.id_order = od.id_order " +
                "where od.id_order =" + [id], function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    res.json(result);
                }
                else {
                    res.status(404).json({ text: "error al obtener resultados" });
                }
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO orders set ?", [req.body]);
            yield database_1.default.query("SELECT MAX(id_order) AS id FROM orders", function (err, result, fields) {
                if (err)
                    throw err;
                if (result) {
                    res.json(result);
                }
                else {
                    res.status(404).json({ text: "obteniendo factura" });
                }
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("DELETE FROM orders WHERE id_order = ?", [id]);
            res.json({ mensaje: "Eliminando la factura con id " + req.params.id });
        });
    }
}
const billController = new BillController();
exports.default = billController;
