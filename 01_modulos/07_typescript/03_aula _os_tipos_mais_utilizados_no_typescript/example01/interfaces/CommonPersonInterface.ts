import { Gender_type } from "../types/GenderType";

export interface CommonPerson_interface {
    name: string;
    age: number;
    gender: Gender_type;
    bithDay: Date;
};