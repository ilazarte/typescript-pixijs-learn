import Graphics = PIXI.Graphics;
import {Line} from "./Line";
import {SegmentedLineParams} from "./SegmentedLineParams";
import {Maths} from "../../utils/Maths";

export class SegmentedLine implements Line {

    private params: SegmentedLineParams;

    constructor(params: SegmentedLineParams) {
        this.params = params;
    }

    render(x1: number,
           y1: number,
           x2: number,
           y2: number,
           graphics: Graphics) : Graphics {

        let {width, color, alpha = 1.0, segments, jitter} = this.params,
            a = Math.abs,
            xlen = (a(x2) - a(x1)) / segments,
            ylen = (a(y2) - a(y1)) / segments,
            i = 0,
            xc = 0,
            yc = 0;

        graphics.moveTo(x1, y1);
        graphics.lineStyle(width, color, alpha);
        for (let i = 1; i < segments + 1; i++) {
            xc = x1 + xlen * i + Maths.random(-jitter, jitter);
            yc = y1 + ylen * i + Maths.random(-jitter, jitter);
            graphics.lineTo(xc, yc);
        }

        return graphics;
    }
}