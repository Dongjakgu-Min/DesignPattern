import {Chicken} from "../chicken";

export class SeasonedChicken extends Chicken {
    constructor() {
        super();
        this.description = '양념치킨';
    }

    cost() {
        return 16000;
    }

}