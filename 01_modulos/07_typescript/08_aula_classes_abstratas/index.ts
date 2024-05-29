import { Armario_class } from "./classes/ArmarioClass";
import { Cadeira_class } from "./classes/CadeiraClass";
import { Geladeira_class } from "./classes/GeladeiraClass";
import { Mesa_class } from "./classes/MesaClass";
import { vender } from "./functions/venderFuncion";

const cadeira = new Cadeira_class(
    [1, 1, 3], false, true
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

vender(cadeira, 50);
vender(mesa, 400);
vender(armario, 600);
vender(geladeira, 1300);