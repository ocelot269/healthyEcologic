"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class VegetablesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('verduritas frescas'));
    }
}
const vegetablesRoutes = new VegetablesRoutes();
exports.default = vegetablesRoutes.router;
