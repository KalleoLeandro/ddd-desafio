import { create } from "domain";
import { Entity } from "src/core/entities/entity";
import { UniqueEntityUUID } from "src/core/entities/unique-entity-id";
import { Alert } from "./alert";

interface ProductProps {    
    name: string;
    size: number;
    color: string;
    quantity: number;
    minQuantity: number;
    price: number;
    createdAt: Date;
    updatedAt?: Date;
}

export class Product extends Entity<ProductProps> {

    get name(){
        return this.props.name;
    }

    set name(name:string){
        this.props.name = name;
    }

    get size(){
        return this.props.size;
    }

    set size(size:number){
        this.props.size = size;
    }

    get color(){
        return this.props.name;
    }

    set color(color:string){
        this.props.color = color;
    }

    get quantity(){
        return this.props.quantity;
    }

    set quantity(quantity:number){
        if(quantity < this.minQuantity){
            //Invocar use case alert            
        }
        this.props.quantity = quantity;
    }

    get minQuantity(){
        return this.props.minQuantity;
    }

    set minQuantity(minQuantity:number){
        this.props.minQuantity = minQuantity;
    }

    get price(){
        return this.props.price;
    }

    set price(price: number){
        this.props.price = price;
    }

    get createdAt(){
        return this.props.createdAt;
    }

    set createdAt(createdAt: Date){
        this.props.createdAt = createdAt;
    }

    get updatedAt(){
        return this.props.updatedAt;
    }

    set updatedAt(updatedAt:Date | undefined){
        this.props.updatedAt = updatedAt;
    }

    static create(props: ProductProps, id?: UniqueEntityUUID) {
        const product = new Product({
            ...props,
            createdAt: new Date(),
        }, id);

        return product;
    }
}