import { MaterialType } from "../types/MaterialType";
import { MovelInterface } from "./MovelInterface";

export interface MesaInterface extends MovelInterface {
    pernas: number;
    material: MaterialType;
}