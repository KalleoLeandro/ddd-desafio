import { Sell } from "src/entities/sell";

export interface SellRepository{
    create(sell: Sell): Promise<void>;
    findMany(initialDate: Date, finalDate: Date): Promise<Sell[]>;
}