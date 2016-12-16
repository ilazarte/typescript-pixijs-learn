export class Populations {

    static random(min: number, max = min) {
        return Math.random() * (max - min + 1) + min;
    }
}