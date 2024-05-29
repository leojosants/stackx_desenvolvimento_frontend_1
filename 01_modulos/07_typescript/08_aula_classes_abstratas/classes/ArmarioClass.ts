import { Movel_class } from '../classes/MovelClass';
import { Armario_interface } from '../interfaces/ArmarioInterface';

export class Armario_class extends Movel_class implements Armario_interface {
    portas: number;
    aberto: boolean = false;

    constructor(
        dimensao: number[],
        portas: number
    ) {
        super(dimensao);
        this.portas = portas;
    }
}