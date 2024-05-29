import { Movel_class } from '../classes/MovelClass';
import { Cadeira_interface } from '../interfaces/CadeiraInterface';

export class Cadeira_class extends Movel_class implements Cadeira_interface {
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