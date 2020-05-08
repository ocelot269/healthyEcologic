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
        this.router.get('/', vegetablesController_1.default.index);
    }
}
const vegetablesRoutes = new VegetablesRoutes();
exports.default = vegetablesRoutes.router;
