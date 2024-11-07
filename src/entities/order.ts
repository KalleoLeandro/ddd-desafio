import { Entity } from "src/core/entities/entity";
import { Product } from "./product"
import { UniqueEntityUUID } from "src/core/entities/unique-entity-id";

interface OrderProps {
    createdAt: Date;
    products: Product[];
    status: string;
    deliveryDate: Date
}

export class Order extends Entity<OrderProps> {
    static create(props: OrderProps, id?: UniqueEntityUUID) {
        const order = new Order({
            ...props,
            createdAt: new Date(),
        }, id);

        return order;
    }
}
