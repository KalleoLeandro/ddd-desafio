import { ProductRepository } from "src/repository/product-repository";

interface FindProductUseCaseRequest {
    query: string;
}

export class FindProductUseCase {

    constructor(private productRepository: ProductRepository) {

    }
    async execute({ query }: FindProductUseCaseRequest) {        

        const product = await this.productRepository.findUnique(query);
        
        return product;
    }
}