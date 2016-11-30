import {Sketch} from "../Sketch";
import Graphics = PIXI.Graphics;
import {Maths} from "../utils/Maths";

export class BasicChart extends Sketch {

    graphics: Graphics;

    setup(): void {
        this.setRenderer(PIXI.autoDetectRenderer(800, 600, {antialias: true}));
        this.setStage(new PIXI.Container());

        this.stage.interactive = true;

        let graphics = new Graphics(),
            x = 100,
            y = 400;
        this.graphics = graphics;

        let dataset = Maths.dataset(200, 100, 200),
            coords: number[] = [];

        dataset.forEach((num, i) => {
            coords.push(i);
            coords.push(num);
        });

        graphics.beginFill(0xcccccc);
        graphics.moveTo(x, y);
        graphics.drawPolygon(coords);
        graphics.endFill();

        this.stage.addChild(graphics);
    }
}