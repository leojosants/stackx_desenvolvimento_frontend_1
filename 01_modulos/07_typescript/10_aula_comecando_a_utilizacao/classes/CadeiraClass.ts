import { MovelClass } from '../classes/MovelClass';
import { CadeiraInterface } from '../interfaces/CadeiraInterface';

export class CadeiraClass extends MovelClass implements CadeiraInterface {
    estofado: boolean;
    apoioBraco: boolean;
    private pernas: number = 4;

    constructor(
        dimensao: number[],
        estofado: boolean,
        apoioBraco: boolean,
    ) {
        super(dimensao);
        this.estofado = estofado;
        this.apoioBraco = apoioBraco;
    }
}