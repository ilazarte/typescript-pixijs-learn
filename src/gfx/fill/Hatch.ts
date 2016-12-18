import Graphics = PIXI.Graphics;
import {HatchParams} from "./HatchParams";

/**
 * http://thevirtualinstructor.com/hatchingcrosshatching.html
 */

export class Hatch {
    graphics = new Graphics();
    params: HatchParams;
    constructor(params: HatchParams) {
        this.params = params;
    }

    render(): Graphics {
        let g = this.graphics,
            p = this.params,
            {x, y, width, height, spacing, color = 0x000000} = p,
            i = 0;

        if (p.rotation) {
            g.rotation = p.rotation;
        }

        g.lineStyle(1, color);

        while (i < width) {
            g.moveTo(i, y);
            g.lineTo(i, y + height);
            i += spacing;
        }
        return g;
    }
}