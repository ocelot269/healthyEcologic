"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const vegetablesRoutes_1 = __importDefault(require("./routes/vegetablesRoutes"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const billRoutes_1 = __importDefault(require("./routes/billRoutes"));
const billDetailsRoutes_1 = __importDefault(require("./routes/billDetailsRoutes"));
const commentRoutes_1 = __importDefault(require("./routes/commentRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/vegetables', vegetablesRoutes_1.default);
        this.app.use('/api/users', usersRoutes_1.default);
        this.app.use('/api/bill', billRoutes_1.default);
        this.app.use('/api/bill/details', billDetailsRoutes_1.default);
        this.app.use('/api/comments', commentRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port", this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
