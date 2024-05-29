import { Armario_class } from "./classes/ArmarioClass";
import { Cadeira_class } from "./classes/CadeiraClass";
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

console.log(
    cadeira, mesa, armario
);