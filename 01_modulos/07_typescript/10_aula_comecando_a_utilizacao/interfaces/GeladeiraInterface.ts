import { EletrodomesticoInterface } from "./EletrodomesticoInterface";

export interface GeladeiraInterface extends EletrodomesticoInterface {
    litros: number;
    cor: string;
    bivolt:boolean
}