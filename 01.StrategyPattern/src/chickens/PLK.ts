import { Chicken } from '../chicken';
import { Fried } from '../method/Fried';

export class PLK extends Chicken {
    constructor(name, price) {
        super(name, price);
        this.method = new Fried();
    }
}

