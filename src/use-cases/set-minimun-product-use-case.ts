import { ProductRepository } from "src/repository/product-repository";

interface SetMinimunProductRequest {
    id: string;
    quantity: number;
}

export class SetMinimunProductUseCase {

    constructor(private productRepository: ProductRepository) {

    }
    async execute({ id, quantity }: SetMinimunProductRequest) {       

        await this.productRepository.updateMinimunQuantity(id, quantity);
    }
}