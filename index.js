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
const dotenv_1 = __importDefault(require("dotenv"));
const elysia_1 = require("elysia");
const node_1 = require("@elysiajs/node");
const cors_1 = __importDefault(require("@elysiajs/cors"));
const Router_1 = require("./Router");
class API {
    constructor() {
        this.app = new elysia_1.Elysia({ adapter: (0, node_1.node)() });
        dotenv_1.default.config();
        this.userMiddlewares();
        this.useRoutes();
        this.init().then(() => __awaiter(this, void 0, void 0, function* () { return console.log(`Server is running at: ${process.env.PORT}`); }));
    }
    userMiddlewares() {
        this.app.use((0, cors_1.default)());
    }
    useRoutes() {
        this.app.group("/api/products", (app) => app.use(Router_1.Router.products));
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.listen(process.env.PORT || 5000);
        });
    }
}
new API();
