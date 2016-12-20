import {Line} from "../renderer/Line";

export interface HatchParams {

    /**
     * The line renderer
     */
    line: Line;

    /**
     * Space between each hatch
     */
    spacing: number;

    /**
     * Amount to rotate in radians.
     */
    rotation?: number;
}