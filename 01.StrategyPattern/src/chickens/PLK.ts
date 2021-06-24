import { Chicken } from '../chicken';
import { Fried } from '../method/Fried';

export class PLK extends Chicken {
    constructor(name, price) {
        super(name, price);
        this.method = new Fried();
    }

    override getTaste = () => {
        console.log('뿌링클에는 하루 권장 나트륨의 4배가 들어가 있습니다.');
    }
}

