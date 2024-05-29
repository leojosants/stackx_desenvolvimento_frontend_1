export interface Eletrodomestico_interface {
    nome: string;
    marca: string;
    ligado: boolean;
    ligar: () => void;
    desligar: () => void;
};