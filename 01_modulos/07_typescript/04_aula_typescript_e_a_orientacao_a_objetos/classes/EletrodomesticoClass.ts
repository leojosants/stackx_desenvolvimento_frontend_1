import { Eletrodomestico_interface } from './../interfaces/EletrodomesticoInterface';

export class Eletrodomestico implements Eletrodomestico_interface {
    nome: string;
    marca: string;
    ligado: boolean = false;

    constructor(nome: string, marca: string) {
        this.nome = nome;
        this.marca = marca;
    }

    ligar(): void {
        this.ligado = true;
    }

    desligar(): void {
        this.ligado = false;
    }
}