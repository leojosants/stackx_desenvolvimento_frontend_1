import { MovelClass } from './MovelClass';
import { EletrodomesticoInterface } from '../interfaces/EletrodomesticoInterface';
import { VoltType } from '../types/VoltType';

export class EletrodomesticoClass extends MovelClass implements EletrodomesticoInterface {
    ligado: boolean = false;

    private circuitor(volt: VoltType): boolean {
        if (volt === 110) {
            return true;
        }
        else {
            throw new Error('A voltagem está errada.');
        }
    }

    ligar(volt: VoltType): void {
        if (this.circuitor(volt)) {
            this.ligado = true;
        }
    }

    desligar(volt: VoltType): void {
        if (this.circuitor(volt)) {
            this.ligado = false;
        }
    }
}