import { Elysia, t } from "elysia";
import { ProductController } from "./controllers/ProductController";

export class Router {
    static products = new Elysia()
        .post(
            "/",
            ({ body }) => ProductController.create(body),
            {
                body: t.Object({
                    name: t.String(),
                    price: t.Number(),
                    description: t.Optional(t.String()),
                    category: t.String()
                })
            }
        )
        .get(
            ":id",
            ({ params: { id } }) => ProductController.getById(Number(id)),
            {
                params: t.Object({
                    id: t.String()
                })
            }
        )
        .get(
            "/",
            () => ProductController.getAll()
        )
        .delete(
            "/:id",
            ({ params: { id } }) => ProductController.delete(Number(id)),
            {
                params: t.Object({
                    id: t.String()
                })
            }
        );
}