import { Armario_class } from "./classes/ArmarioClass";
import { Cadeira_class } from "./classes/CadeiraClass";
import { Geladeira_class } from "./classes/GeladeiraClass";
import { Mesa_class } from "./classes/MesaClass";

const cadeira = new Cadeira_class(
    [1, 1], false, true
);

const mesa = new Mesa_class(
    [5, 6, 2], 4, 'Mármore'
);

const armario = new Armario_class(
    [6, 1, 8], 6
);

const geladeira = new Geladeira_class(
    [1, 1, 1.7], 40, 'Branca'
);

console.log(
    `A geladeira está desligada? ${!geladeira.ligado}`
);

geladeira.ligar()

console.log(
    `A geladeira está ligada? ${geladeira.ligado}`
);