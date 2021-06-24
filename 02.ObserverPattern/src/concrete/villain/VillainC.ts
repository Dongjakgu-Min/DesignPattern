import {Villain} from "./Villain";

export class VillainC extends Villain {
    protected behavior(): void {
        switch (this.action) {
            case 0: console.log('핫하 피했다'); break;
            case 1: console.log('핫하 피했다'); break;
            case 2: console.log('으악!'); break;
            default: console.log('뭐하는 것이냐 액션가면!'); break;
        }
    }
}