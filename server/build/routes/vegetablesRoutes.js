"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vegetablesController_1 = __importDefault(require("../controller/vegetablesController"));
class VegetablesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', vegetablesController_1.default.list),
            this.router.get('/:id', vegetablesController_1.default.getOne),
            this.router.post('/', vegetablesController_1.default.create),
            this.router.put('/:id', vegetablesController_1.default.update),
            this.router.delete('/:id', vegetablesController_1.default.delete);
    }
}
const vegetablesRoutes = new VegetablesRoutes();
exports.default = vegetablesRoutes.router;
