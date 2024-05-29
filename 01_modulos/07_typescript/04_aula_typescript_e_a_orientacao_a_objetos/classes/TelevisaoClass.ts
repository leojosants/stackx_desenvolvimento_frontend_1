import { Televisao_interface } from '../interfaces/TelevisaoInterface';
import { interface_type } from '../types/intercafeType';
import { Eletrodomestico } from './EletrodomesticoClass';

export class Televisao extends Eletrodomestico implements Televisao_interface {
    volume: number = 50;
    interface?: interface_type | undefined;

    private circuito: () => boolean = () => {
        function umaFuncaoPrivada() {
            try {
                console.log(
                    'Os circuitos estão funcionando bem.'
                );
                return true;
            }
            catch (error) {
                throw new Error(
                    'Não foi possível ligar/desligar a televisão'
                );
            }
        }
        return umaFuncaoPrivada();
    };

    ligar(): void {
        if (this.circuito()) {
            this.interface = 'satelite';
            this.ligado = true;
        }
    }

    desligar(): void {
        if (this.circuito()) {
            this.interface = undefined;
            this.ligado = false;
        }
    }
}