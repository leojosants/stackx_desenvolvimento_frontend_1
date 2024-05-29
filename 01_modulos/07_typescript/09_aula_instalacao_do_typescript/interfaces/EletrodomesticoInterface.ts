import { Volt_type } from '../types/VoltType';
import { Movel_interface } from './MovelInterface';

export interface Eletrodomestico_interface extends Movel_interface {
    ligado: boolean;
    ligar: (volt: Volt_type) => void;
    desligar: (volt: Volt_type) => void;
}