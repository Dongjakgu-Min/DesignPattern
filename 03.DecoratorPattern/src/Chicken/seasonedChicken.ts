import {Chicken} from "../chicken";

export class SeasonedChicken extends Chicken {
    constructor() {
        super();
        this.description = 'μλμΉν¨';
    }

    cost() {
        return 16000;
    }

}