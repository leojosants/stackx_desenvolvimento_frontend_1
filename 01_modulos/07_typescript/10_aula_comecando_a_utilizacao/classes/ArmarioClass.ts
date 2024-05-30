import { MovelClass } from '../classes/MovelClass';
import { ArmarioInterface } from '../interfaces/ArmarioInterface';

export class ArmarioClass extends MovelClass implements ArmarioInterface {
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