import { CookingMethod } from './cookingMethod';

export class Boiled implements CookingMethod {
    getCookingMethod(): void {
        console.log('삶아서 조리했습니다.')
    }
}