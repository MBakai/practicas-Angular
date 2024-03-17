"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const persona_1 = __importDefault(require("../routes/persona"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '4000';
        this.middleware();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo por el puerto: ', this.port);
        });
    }
    routes() {
        this.app.use('/api/personas', persona_1.default);
    }
    middleware() {
        // Parseo del body se debe inicializar antes del Routes
        this.app.use(express_1.default.json());
    }
}
exports.default = Server;
