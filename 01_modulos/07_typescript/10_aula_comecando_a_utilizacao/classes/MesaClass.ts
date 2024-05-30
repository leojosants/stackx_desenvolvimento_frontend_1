import { MovelClass } from '../classes/MovelClass';
import { MesaInterface } from '../interfaces/MesaInterface';
import { MaterialType } from '../types/MaterialType';

export class MesaClass extends MovelClass implements MesaInterface {
    pernas: number;
    material: MaterialType;

    constructor(
        dimensao: number[],
        pernas: number,
        material: MaterialType,
    ) {
        super(dimensao);
        this.pernas = pernas;
        this.material = material;
    }
}