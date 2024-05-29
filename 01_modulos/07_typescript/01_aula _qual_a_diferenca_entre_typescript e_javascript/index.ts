import { Cachorro_interface } from "./interfaces/CachorroInterface";

const cachorro: Cachorro_interface = {
    nome: 'Dick',
    idade: 10,
    raca: 'Fila',
    pelagem: 'Marrom',
    latido: (): string => {
        return 'Charorro latindo...';
    },
};

console.log(
    cachorro.nome
);

console.log(
    cachorro.idade
);

console.log(
    cachorro.raca
);

console.log(
    cachorro.pelagem
);

console.log(
    cachorro.latido()
);