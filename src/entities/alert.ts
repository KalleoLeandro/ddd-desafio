import { Entity } from "src/core/entities/entity";
import { UniqueEntityUUID } from "src/core/entities/unique-entity-id";
import { Optional } from "src/core/types/optional";

interface AlertProps {
    type: string;
    message: string;
    createdAt: Date
}

export class Alert extends Entity<AlertProps> {
    static create(props: Optional<AlertProps, 'createdAt'>, id?: UniqueEntityUUID) {
        const alert = new Alert({
            ...props,
            createdAt: new Date(),
        }, id);

        return alert;
    }
}