import { ListaItens_type } from "./types/ListaItens_type";

const listaItens1: ListaItens_type = ['short', 'blusa'];
const listaItens2: string[] = ['camisa', 'calça'];
const sobrenome: string = 'Santos';
const nome: string = `Leonardo ${sobrenome}`;
const anoAtual: number = 2024;
const anoNascimento: number = 1984;
let age: number = (anoAtual - anoNascimento);

listaItens1.push('meia');
listaItens2.push('touca');

console.log(
    `Nome em caixa alta: ${nome.toUpperCase()}`
);

console.log(
    `Dobro da idade: ${age * 2}`
);