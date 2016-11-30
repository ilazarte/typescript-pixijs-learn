import {Sketch} from "../Sketch";
import Graphics = PIXI.Graphics;

export class BasicGeometry extends Sketch {

    graphics: Graphics;

    setup(): void {
        this.setRenderer(PIXI.autoDetectRenderer(800, 600, {antialias: true}));
        this.setStage(new PIXI.Container());

        this.stage.interactive = true;

        let graphics = new Graphics();
        this.graphics = graphics;

        /*triangle*/
        // set a fill and line style
        // draw a shape
        graphics.beginFill(0xFF3300);
        graphics.lineStyle(2, 0xffd900, 1);
        graphics.moveTo(50, 50);
        graphics.lineTo(250, 50);
        graphics.lineTo(100, 100);
        graphics.lineTo(50, 50);
        graphics.endFill();

        // set a fill and a line style again and draw a rectangle
        graphics.lineStyle(2, 0x0000FF, 1);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(50, 250, 120, 120);

        // draw a rounded rectangle
        graphics.lineStyle(2, 0xFF00FF, 1);
        graphics.beginFill(0xFF00BB, 0.25);
        graphics.drawRoundedRect(150, 450, 300, 100, 15);
        graphics.endFill();

        // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
        graphics.lineStyle(0);
        graphics.beginFill(0xFFFF0B, 0.5);
        graphics.drawCircle(470, 90, 60);
        graphics.endFill();

        graphics.setTransform(400, 400);

        this.stage.addChild(graphics);
    }


    render(): void {

        this.graphics.rotation += 0.01;
        super.render();
    }
}