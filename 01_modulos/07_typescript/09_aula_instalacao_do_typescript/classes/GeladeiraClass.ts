import { Geladeira_interface } from '../interfaces/GeladeiraInterface';
import { Eletrodomestico_class } from './EletrodomesticoClass';

export class Geladeira_class extends Eletrodomestico_class implements Geladeira_interface {
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