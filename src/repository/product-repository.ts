import { Product } from "src/entities/product";

export interface ProductRepository{
    findUnique(query: string): Promise<Product>;
    findMany(id:string): Promise<Product[]>;
    findManyByDate(initialDate: Date, finalDate: Date): Promise<Product[]>;
    updateMinimunQuantity(id: string, quantity: number): Promise<void>;
}