import { MovelInterface } from "./MovelInterface";

export interface ArmarioInterface extends MovelInterface {
    portas: number;
    aberto: boolean;
}