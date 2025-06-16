import { ProductService } from "../services/ProductService";

export class ProductController {
    static async create({ name, price, description, category }: { 
        name: string;
        price: number;
        description?: string;
        category: string;
    }) {
        return await ProductService.create({ name, price, description, category });
    }

    static async getById(id: number) {
        const product = await ProductService.findById(id);
        if (!product) throw new Error("Product not found");
        return product;
    }

    static async getAll() {
        return await ProductService.findAll();
    }

    static async delete(id: number) {
        await ProductService.delete(id);
        return { message: "Product deleted successfully" };
    }
}