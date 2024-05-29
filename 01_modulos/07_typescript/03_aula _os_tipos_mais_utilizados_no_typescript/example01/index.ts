import { CommonPerson_interface } from "./interfaces/CommonPersonInterface";
import { RadicalPerson_interface } from "./interfaces/RadicalPersonInterface";

const person1: Omit<CommonPerson_interface, 'radicalSports'> = {
    name: 'Leonardo',
    age: 39,
    gender: 'male',
    bithDay: new Date('06/03/1984'),
};

const person2: RadicalPerson_interface = {
    name: 'Leonardo',
    age: 39,
    gender: 'male',
    bithDay: new Date('06/03/1984'),
    radicalSports: ['roller', 'skateboard'],
};

console.log(
    person1
);

console.log(
    person2
);