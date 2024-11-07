import { Alert } from "src/entities/alert";

export interface AlertRepository{
    create(alert: Alert): Promise<void>;
}