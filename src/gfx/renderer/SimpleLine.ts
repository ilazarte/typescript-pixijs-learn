import Graphics = PIXI.Graphics;
import {Line} from "./Line";
import {LineParams} from "./LineParams";

export class SimpleLine implements Line {

    private params: LineParams;

    constructor(params: LineParams) {
        this.params = params;
    }

    render(x1: number,
           y1: number,
           x2: number,
           y2: number,
           graphics: Graphics) : Graphics {

        let {width, color, alpha = 1.0} = this.params;
        graphics.lineStyle(width, color, alpha);
        graphics.moveTo(x1, y1);
        graphics.lineTo(x2, y2);

        return graphics;
    }
}