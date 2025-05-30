import { Elysia, t } from "elysia";
import { MovieController } from "./controllers/MovieController";

export class Router {
    static movies = new Elysia()
        .post(
            "/",
            ({ body }) => MovieController.create(body),
            {
                body: t.Object({
                    title: t.String(),
                    director: t.String(),
                    year: t.Number(),
                    rating: t.Number()
                })
            }
        )
        .get(
            "/:id",
            ({ params: { id } }) => MovieController.getById(Number(id)),
            {
                params: t.Object({
                    id: t.String()
                })
            }
        )
        .get(
            "/",
            () => MovieController.getAll()
        )
        .delete(
            "/:id",
            ({ params: { id } }) => MovieController.delete(Number(id)),
            {
                params: t.Object({
                    id: t.String()
                })
            }
        );
}