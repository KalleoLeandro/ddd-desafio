import { Sell } from "src/entities/sell";
import { SellRepository } from "src/repository/sell-repository";

interface SellUseCaseRequest {
    sell: Sell    
}

export class HistoryStockUseCase {

    constructor(private sellRepository: SellRepository) {

    }
    async execute({ sell }: SellUseCaseRequest) {        

        await this.sellRepository.create(sell);
    }
}