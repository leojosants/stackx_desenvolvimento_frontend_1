import { Eletrodomestico_interface } from "./EletrodomesticoInterface";

export interface Geladeira_interface extends Eletrodomestico_interface {
    litros: number;
    cor: string;
    bivolt:boolean
}