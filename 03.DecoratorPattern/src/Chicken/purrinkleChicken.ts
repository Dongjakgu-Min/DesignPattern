import {Chicken} from "../chicken";

export class PurrinkleChicken extends Chicken {
    constructor() {
        super();
        this.description = '뿌링클';
    }

    cost() {
        return 17000;
    }
}