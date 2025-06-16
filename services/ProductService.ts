import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const ProductService = {
  async create(data: { 
    name: string;
    price: number;
    description?: string;
    category: string;
  }) {
    return await prisma.product.create({ data });
  },

  async findById(id: number) {
    return await prisma.product.findUnique({ where: { id } });
  },

  async findAll() {
    return await prisma.product.findMany();
  },

  async delete(id: number) {
    return await prisma.product.delete({ where: { id } });
  }
};