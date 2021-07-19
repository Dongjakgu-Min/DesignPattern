export abstract class Chicken {
    protected description = '치킨';

    getDescription = () => {
        return this.description;
    }

    abstract cost();
}