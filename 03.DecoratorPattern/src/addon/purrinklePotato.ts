import {Addon} from "../addon";
import {Chicken} from "../chicken";

export class PurrinklePotato extends Addon {
    chicken: Chicken;

    constructor(chicken: Chicken) {
        super();
        this.chicken = chicken;
    }

    getDescription = () => {
        return this.chicken.getDescription() + ', 뿌링감자';
    }

    cost() {
        return 4000 + this.chicken.cost();
    }
}