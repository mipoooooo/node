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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const ProductService_1 = require("../services/ProductService");
class ProductController {
    static create(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name, price, description, category }) {
            return yield ProductService_1.ProductService.create({ name, price, description, category });
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield ProductService_1.ProductService.findById(id);
            if (!product)
                throw new Error("Product not found");
            return product;
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProductService_1.ProductService.findAll();
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield ProductService_1.ProductService.delete(id);
            return { message: "Product deleted successfully" };
        });
    }
}
exports.ProductController = ProductController;
