import { Campo_type } from "./types/Campo_type";
import { Item_type } from "./types/Item_type";
import { Lista_type } from "./types/Lista_type";

let campo1: Campo_type;
let campo2: any;
let lista1: any[];
let lista2: Lista_type = ['item 1', 'item 2', 10, 50];

lista2.forEach(
    (item: Item_type) => {
        if (typeof item === 'string') {
            console.log(
                `Nome em caixa alta: ${item.toUpperCase()}`
            );
        }
        else if (typeof item === 'number') {
            console.log(
                `Dobro do número ${item}: ${item * 2}`
            );
        }
    }
);