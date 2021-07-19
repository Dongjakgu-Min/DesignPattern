import {Observer} from "../../Observer";
import {ActionMask} from "../ActionMask";


export abstract class Villain implements Observer{
    protected action: number;
    private actionMask: ActionMask;

    constructor(actionMask: ActionMask) {
        this.actionMask = actionMask;
        this.actionMask.registerObserver(this);
    }

    update(action: number): void {
        this.action = action;
        this.behavior()
    }

    protected abstract behavior(): void;
}