import {ShadeParams} from "./ShadeParams";
export interface HatchParams extends ShadeParams {

    /**
     * Space between each hatch
     */
    spacing: number;

    /**
     * Amount to rotate in radians.
     */
    rotation?: number;
}