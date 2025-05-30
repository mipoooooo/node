import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const MovieService = {
    async create(data: { 
        title: string;
        director: string;
        year: number;
        rating: number;
    }) {
        return await prisma.movie.create({ data });
    },

    async findById(id: number) {
        return await prisma.movie.findUnique({ where: { id } });
    },

    async findAll() {
        return await prisma.movie.findMany();
    },

    async delete(id: number) {
        return await prisma.movie.delete({ where: { id } });
    }
};