import Noise = require("noisejs");

export class Maths {

    static noise = new Noise(Math.random());

    /**
     * Map an array of numbers from one range to another.
     *
     * @param nums
     * @param fromMin
     * @param fromMax
     * @param toMin
     * @param toMax
     * @returns {number[]}
     */
    static map(nums: number[],
               fromMin: number,
               fromMax: number,
               toMin: number,
               toMax: number) {

        let res: number[],
            val: number;

        for (let i = 0; i < nums.length; i++) {
            val = nums[i];
            res[i] = toMin + (val - fromMin) *
                (toMax - toMin) /
                (fromMax - fromMin);
        }

        return res;
    }

    /**
     * Generate a random number within a range.
     * @param min
     * @param max
     * @returns {number}
     */
    static random(min: number, max = min): number {
        return Math.random() * (max - min) + min;
    }

    /**
     * Generate an array of numbers within a range.
     * @param num
     * @param min
     * @param max
     */
    static dataset(num: number, min: number, max: number): number[] {
        let res: number[] = [];
        for (let i = 0; i < num; i++) {
            res.push(Maths.random(min, max));
        }
        return res;
    }
}