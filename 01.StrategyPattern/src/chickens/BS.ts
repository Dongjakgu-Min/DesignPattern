import { Chicken } from './chicken';
import { Boiled } from "../method/Boiled";

export class BS extends Chicken {
    constructor(name, price) {
        super(name, price);
        this.method = new Boiled();
    }

    override getTaste = () => {
        console.log('백숙은 담백한 맛이 일품입니다.');
    }
}
