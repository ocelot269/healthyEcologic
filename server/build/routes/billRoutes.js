"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const billController_1 = __importDefault(require("../controller/billController"));
class BillRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //  this.router.get('/:id', billController.getBill),
        this.router.post('/', billController_1.default.create),
            this.router.delete('/:id', billController_1.default.delete);
    }
}
const billRoutes = new BillRoutes();
exports.default = billRoutes.router;
