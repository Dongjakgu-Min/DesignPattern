import { Chicken } from '../chicken';
import { Boiled } from "../method/Boiled";

export class BS extends Chicken {
    constructor(name, price) {
        super(name, price);
        this.method = new Boiled();
    }
}
