import Graphics = PIXI.Graphics;
import {HatchParams} from "./HatchParams";
import {Fill} from "./Fill";

/**
 * http://thevirtualinstructor.com/hatchingcrosshatching.html
 */

export class Hatch implements Fill {

    private graphics: Graphics = new Graphics();

    private params: HatchParams;

    constructor(params: HatchParams) {
        this.params = params;

        if (this.params.rotation) {
            this.graphics.rotation = this.params.rotation;
        }
    }

    fill(x: number, y: number, width: number, height: number): PIXI.Graphics {

        let i = 0,
            p = this.params,
            g = this.graphics,
            {line, spacing} = p;

        g.clear();
        g.x = x;
        g.y = y;

        while (i < width) {
            line.render(i, 0, i, height, g);
            i += spacing;
        }

        return g;
    }

    getGraphics(): PIXI.Graphics {
        return this.graphics;
    }

}