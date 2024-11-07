import { Entity } from "src/core/entities/entity";
import { Product } from "./product";
import { UniqueEntityUUID } from "src/core/entities/unique-entity-id";

interface SellProps {
    createdAt: Date;
    quantity: number;
    total: number;
    products: Product[];
}



export class Sell extends Entity<SellProps>{

    static create(props: SellProps, id?: UniqueEntityUUID) {
        const sell = new Sell({
            ...props,
            createdAt: new Date()
        }, id);

        return sell;
    }
}