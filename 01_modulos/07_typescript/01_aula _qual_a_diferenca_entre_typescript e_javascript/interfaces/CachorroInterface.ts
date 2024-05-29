import { Pet_type } from "../types/PetType";

export interface Cachorro_interface extends Pet_type {
    raca: string;
    pelagem: string;
    latido: () => string;
}