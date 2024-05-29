import { Movel_class } from './MovelClass';
import { Eletrodomestico_interface } from '../interfaces/EletrodomesticoInterface';
import { Volt_type } from '../types/VoltType';

export class Eletrodomestico_class extends Movel_class implements Eletrodomestico_interface {
    ligado: boolean = false;

    private circuitor(volt: Volt_type): boolean {
        if (volt === 110) {
            return true;
        }
        else {
            throw new Error('A voltagem está errada.');
        }
    }

    ligar(volt: Volt_type): void {
        if (this.circuitor(volt)) {
            this.ligado = true;
        }
    }

    desligar(volt: Volt_type): void {
        if (this.circuitor(volt)) {
            this.ligado = false;
        }
    }
}