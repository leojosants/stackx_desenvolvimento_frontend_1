import { Televisao } from './classes/TelevisaoClass';

const televisaoDaSala = new Televisao('Sala', 'LG');

console.log(
    televisaoDaSala.ligado
);

televisaoDaSala.ligar();

console.log(
    televisaoDaSala.ligado
);