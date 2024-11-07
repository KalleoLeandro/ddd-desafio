import { ProductRepository } from "src/repository/product-repository";

interface HistoryStockUseCaseRequest {
    initialDate: Date;
    finalDate: Date;        
}

export class HistoryStockUseCase {

    constructor(private productRepository: ProductRepository) {

    }
    async execute({ initialDate, finalDate }: HistoryStockUseCaseRequest) {        

        const history = await this.productRepository.findManyByDate(initialDate, finalDate);
        
        return history;
    }
}