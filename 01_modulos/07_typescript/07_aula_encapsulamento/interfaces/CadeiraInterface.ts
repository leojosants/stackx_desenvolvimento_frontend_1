import { Movel_interface } from "./MovelInterface";

export interface Cadeira_interface extends Movel_interface {
    estofado: boolean;
    apoioBraco: boolean;
}