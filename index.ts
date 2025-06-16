import dotenv from "dotenv";
import { Elysia } from "elysia";
import { node } from "@elysiajs/node";
import cors from "@elysiajs/cors";
import { Router } from "./Router"

class API {
     constructor() {
        dotenv.config();
        this.userMiddlewares();
        this.useRoutes();
        this.init().then( async () => console.log(`Server is running at: ${process.env.PORT}`))
     }
    private app = new Elysia({ adapter: node() });

    private userMiddlewares() {
        this.app.use(cors());
    }
    private useRoutes() {
        this.app.group("/api/products", (app) => app.use(Router.products));
    }

    async init() {
        this.app.listen(process.env.PORT || 5000);
    }
}

new API();