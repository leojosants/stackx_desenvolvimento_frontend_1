import { Movel_interface } from "./MovelInterface";

export interface Armario_interface extends Movel_interface {
    portas: number;
    aberto: boolean;
}