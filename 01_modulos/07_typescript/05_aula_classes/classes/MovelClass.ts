import { Movel_interface } from "../interfaces/MovelInterface";

export class Movel implements Movel_interface {
    posicao: number[];
    dimensao: number[] = [0, 0];

    constructor(dimensao: number[]) {
        this.dimensao = dimensao;
    }

    mover(x: number, y: number): void {
        const isPositionXnegative: boolean = (this.posicao[0] + x < 0);
        const isPositionYnegative: boolean = (this.posicao[1] + y < 0);
       
        if (isPositionXnegative || isPositionYnegative) {
            throw new Error('O móvel nao pode ficar em valor negativo.');
        }

        this.posicao[0] = this.posicao[0] + x;
        this.posicao[1] = this.posicao[1] + y;
    }
}