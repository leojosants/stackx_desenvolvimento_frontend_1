import { Material_type } from "../types/MaterialType";
import { Movel_interface } from "./MovelInterface";

export interface Mesa_interface extends Movel_interface {
    pernas: number;
    material: Material_type;
}