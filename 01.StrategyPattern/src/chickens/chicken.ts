import { CookingMethod } from "../method/cookingMethod";

export abstract class Chicken {
    private readonly price: number;
    private readonly name: string;
    method: CookingMethod;

    protected constructor(name: string, price: number) {
        this.price = price;
        this.name = name;
    }

    getPrice = () => console.log(this.price + '원 입니다.');
    getName = () => console.log(this.name + ' 입니다.');
    getMethod = () => this.method.getCookingMethod();
    abstract getTaste(): void;
}