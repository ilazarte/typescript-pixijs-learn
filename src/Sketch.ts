import SystemRenderer = PIXI.SystemRenderer;
import Container = PIXI.Container;

export type PixiRenderer = PIXI.CanvasRenderer | PIXI.WebGLRenderer;

export abstract class Sketch {

    renderer: PixiRenderer;

    stage: PIXI.Container;

    canvas: Node;

    setRenderer(renderer: PixiRenderer) {
        this.renderer = renderer;
        let canvas = document.getElementById("sketch").appendChild(this.renderer.view);
        this.canvas = canvas;
    }

    /**
     * Return the renderer instance.
     * @returns {PixiRenderer}
     */
    getRenderer() : PixiRenderer {
        return this.renderer;
    }

    /**
     * Return the canvas element used for the stage.
     * @returns {Node}
     */
    getCanvas() : Node {
        return this.canvas;
    }

    setStage(stage: Container) {
        this.stage = stage;
    }

    update(elapsed: number) {
    }

    /**
     * Initialize the sketch
     */
    abstract setup() : void;

    /**
     * Called on a draw.  Requires set renderer and stage..
     */
    render(): void {
    }

    /**
     * Called when sketch is being destroyed.
     */
    destroy(): void {
        this.renderer.destroy(true);
        Object.keys(PIXI.utils.TextureCache).forEach(texture => PIXI.utils.TextureCache[texture].destroy(true, true));
    }
}