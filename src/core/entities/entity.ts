import { UniqueEntityUUID } from "./unique-entity-id";

export class Entity<Props> {
    private _id: UniqueEntityUUID;

    protected props: Props;

    get id() {
        return this._id;
    }

    protected constructor(props: Props, id?: UniqueEntityUUID) {
        this.props = props;
        this._id = id ?? new UniqueEntityUUID();
    }
}