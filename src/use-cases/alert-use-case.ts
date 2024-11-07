import { UniqueEntityUUID } from "src/core/entities/unique-entity-id";
import { Alert } from "src/entities/alert";
import { AlertRepository } from "src/repository/alert-repository";

interface AlertUseCaseRequest {
    type: string;
    message: string;
}

export class AlertUseCase {

    constructor(private alertRepository: AlertRepository) {

    }
    async execute({ type, message }: AlertUseCaseRequest) {
        const alert = Alert.create({
            type,
            message
            
        }, new UniqueEntityUUID);

        await this.alertRepository.create(alert);
    }
}