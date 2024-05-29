import { interface_type } from "../types/intercafeType";
import { Eletrodomestico_interface } from "./EletrodomesticoInterface";

export interface Televisao_interface extends Eletrodomestico_interface {
    volume: number;
    interface?: interface_type;
};