import SystemRenderer = PIXI.SystemRenderer;
import Container = PIXI.Container;

export type PixiRenderer = PIXI.CanvasRenderer | PIXI.WebGLRenderer;

export abstract class Sketch {

    renderer: PixiRenderer;

    stage: PIXI.Container;

    setRenderer(renderer: PixiRenderer) {
        this.renderer = renderer;
        document.getElementById("sketch").appendChild(this.renderer.view);
    }

    getRenderer() : PixiRenderer {
        return this.renderer;
    }

    setStage(stage: Container) {
        this.stage = stage;
    }

    /**
     * Initialize the sketch
     */
    abstract setup() : void;

    /**
     * Called on a draw.  Requires set renderer and stage..
     */
    render(): void {
        this.renderer.render(this.stage);
    }

    /**
     * Called when sketch is being destroyed.
     */
    destroy(): void {
        this.renderer.destroy(true);
        Object.keys(PIXI.utils.TextureCache).forEach(texture => PIXI.utils.TextureCache[texture].destroy(true));
    }
}