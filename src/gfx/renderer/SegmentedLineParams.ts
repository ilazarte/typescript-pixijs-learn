import {LineParams} from "./LineParams";
export interface SegmentedLineParams extends LineParams {

    /**
     * Line width
     */
    segments: number;

    /**
     * Amount of potential variance per point in pixels.
     */
    jitter: number;
}