import { VoltType } from '../types/VoltType';
import { MovelInterface } from './MovelInterface';

export interface EletrodomesticoInterface extends MovelInterface {
    ligado: boolean;
    ligar: (volt: VoltType) => void;
    desligar: (volt: VoltType) => void;
}