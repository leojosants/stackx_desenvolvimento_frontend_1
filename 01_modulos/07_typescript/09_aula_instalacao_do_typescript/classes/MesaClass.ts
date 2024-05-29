import { Movel_class } from '../classes/MovelClass';
import { Mesa_interface } from '../interfaces/MesaInterface';
import { Material_type } from '../types/MaterialType';

export class Mesa_class extends Movel_class implements Mesa_interface {
    pernas: number;
    material: Material_type;

    constructor(
        dimensao: number[],
        pernas: number,
        material: Material_type,
    ) {
        super(dimensao);
        this.pernas = pernas;
        this.material = material;
    }
}