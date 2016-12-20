import {Sketch} from "../Sketch";
import Graphics = PIXI.Graphics;
import Text = PIXI.Text;
import {KeyMap} from "../utils/KeyMap";
import {Streams} from "../utils/Streams";
import Observable = Rx.Observable;
import {Hatch} from "../gfx/fill/Hatch";
import {SimpleLine} from "../gfx/renderer/SimpleLine";
import {SegmentedLine} from "../gfx/renderer/SegmentedLine";

export class Grass extends Sketch {

    hatch: Hatch;

    setup(): void {

        this.setRenderer(PIXI.autoDetectRenderer(800, 600, {antialias: true, backgroundColor: 0x1099bb}));
        this.setStage(new PIXI.Container());

        this.stage.interactive = true;

        this.hatch = new Hatch({
            line: new SegmentedLine({
                width: 1,
                color: 0x000000,
                segments: 10,
                jitter: 2
            }),
            spacing: 5,
            rotation: 0.5
        });

        //this.hatch.getGraphics().cacheAsBitmap = true;
        this.stage.addChild(this.hatch.fill(200, 200, 150, 150));
    }

    update(elapsed: number) {
        //this.blades.forEach(b => b.update());
        //this.hatch.getGraphics().rotation += 0.01;
        //this.hatch.fill(200, 200, 150, 150);
        //TWEEN.update();
    }
}