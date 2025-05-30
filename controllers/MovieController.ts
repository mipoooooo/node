import { MovieService } from "../services/MovieService";

export class MovieController {
    static async create({ title, director, year, rating }: { 
        title: string;
        director: string;
        year: number;
        rating: number;
    }) {
        return await MovieService.create({ title, director, year, rating });
    }

    static async getById(id: number) {
        const movie = await MovieService.findById(id);
        if (!movie) throw new Error("Movie not found");
        return movie;
    }

    static async getAll() {
        return await MovieService.findAll();
    }

    static async delete(id: number) {
        await MovieService.delete(id);
        return { message: "Movie deleted successfully" };
    }
}