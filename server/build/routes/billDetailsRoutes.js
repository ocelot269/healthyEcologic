"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const billDetailsController_1 = __importDefault(require("../controller/billDetailsController"));
class BillDetailsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //  this.router.get('/bill/id', billDetailsRoutes.getBill),
        this.router.post('/', billDetailsController_1.default.create);
        //this.router.delete('/:id', vegetablesController.delete)
    }
}
const billDetailsRoutes = new BillDetailsRoutes();
exports.default = billDetailsRoutes.router;
