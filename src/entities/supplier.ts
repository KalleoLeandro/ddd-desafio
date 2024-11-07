import { Entity } from "src/core/entities/entity";
import { UniqueEntityUUID } from "src/core/entities/unique-entity-id";


interface SupplierProps {
    name: string;
    contact: string;
    deliveryDate: Date
}

export class Supplier extends Entity<SupplierProps> {
    static create(props: SupplierProps, id?: UniqueEntityUUID) {
        const supplier = new Supplier({
            ...props            
        }, id);

        return supplier;
    }
}