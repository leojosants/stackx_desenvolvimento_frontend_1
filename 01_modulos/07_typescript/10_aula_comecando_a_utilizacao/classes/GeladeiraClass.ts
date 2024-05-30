import { GeladeiraInterface } from '../interfaces/GeladeiraInterface';
import { EletrodomesticoClass } from './EletrodomesticoClass';

export class GeladeiraClass extends EletrodomesticoClass implements GeladeiraInterface {
    litros: number;
    cor: string;
    bivolt: boolean = true;

    constructor(
        dimensao: number[],
        litros: number,
        cor: string,
    ) {
        super(dimensao);
        this.litros = litros;
        this.cor = cor;
    }

    ligar(): void {
        this.ligado = true;
    }

    desligar(): void {
        this.ligado = false;
    }
}