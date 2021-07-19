import { CookingMethod } from './cookingMethod';

export class Fried implements CookingMethod {
    getCookingMethod(): void {
        console.log('튀겨서 조리했습니다.')
    }
}