import {Sketch} from "../Sketch";
import Graphics = PIXI.Graphics;
import Text = PIXI.Text;
import {KeyMap} from "../utils/KeyMap";
import {Streams} from "../utils/Streams";
import Observable = Rx.Observable;
import {Populations} from "../utils/Populations";
import {Hatch} from "../gfx/fill/Hatch";

class Blade {
    x: number;
    y: number;
    length: number;
    alpha: number;
    graphics: Graphics;
    constructor(x: number, y:number, length: number) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.graphics = new Graphics();
        this.alpha = Populations.random(0, 1);
        this.draw();
    }

    update() {
    }

    draw() {
        let g = this.graphics;
        g.lineStyle(1, 0x000000, this.alpha);
        g.moveTo(this.x, this.y);
        g.lineTo(this.x, this.y - this.length);
    }
}

export class Grass extends Sketch {

    blades: Blade[] = [];

    setup(): void {

        this.setRenderer(PIXI.autoDetectRenderer(800, 600, {antialias: true, backgroundColor: 0x1099bb}));
        this.setStage(new PIXI.Container());

        this.stage.interactive = true;

        let hatch = new Hatch({
            x: 200,
            y: 200,
            width: 600,
            height: 200,
            spacing: 10
        });

        this.stage.addChild(hatch.render());

        for (let i = 0; i < 2000; i++) {
            let blade = new Blade(
                    Populations.random(100, 700),
                    Populations.random(400, 500),
                    Populations.random(90, 100));
            this.blades[i] = blade;
            /*console.log(blade);*/
            //this.stage.addChild(blade.graphics);
        }
    }

    update(elapsed: number) {
        //this.blades.forEach(b => b.update());
        //TWEEN.update();
    }
}