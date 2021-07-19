import {Subject} from "../Subject";
import {Observer} from "../Observer";

export class ActionMask implements Subject {
    private observerCollection: Observer[];
    private action;

    constructor() {
        this.observerCollection = []
    }

    notifyObserver(): void {
        this.observerCollection.map((elem: Observer) => {
            elem.update(this.action);
        });
    }

    registerObserver(observer:Observer): void {
        this.observerCollection.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observerCollection = this.observerCollection.filter(obj => obj !== observer);
    }

    actionChanged(): void {
        this.notifyObserver();
    }

    setAction(action: number): void {
        this.action = action;

        switch (action) {
            case 0: console.log('액션 펀치!'); break;
            case 1: console.log('액션 킥!'); break;
            case 2: console.log('액션 빔!'); break;
            default: console.log('액션 가만히 있기!'); break;
        }

        this.actionChanged()
    }
}