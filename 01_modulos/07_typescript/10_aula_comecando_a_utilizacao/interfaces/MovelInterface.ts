export interface MovelInterface {
    posicao: number[];
    dimensao: number[];
    mover: (x: number, y: number) => void;
};