import { ProductRepository } from "src/repository/product-repository";
import { SellRepository } from "src/repository/sell-repository";

interface HistorySellUseCaseRequest {
    initialDate: Date;
    finalDate: Date;
}

export class HistorySellUseCase {

    constructor(private sellRepository: SellRepository) {

    }
    async execute({ initialDate, finalDate }: HistorySellUseCaseRequest) {        

        const history = await this.sellRepository.findMany(initialDate, finalDate);
        
        return history;
    }
}