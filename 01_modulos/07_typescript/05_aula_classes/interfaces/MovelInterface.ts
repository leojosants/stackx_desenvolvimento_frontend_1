export interface Movel_interface {
    posicao: number[];
    dimensao: number[];
    mover: (x: number, y: number) => void;
};