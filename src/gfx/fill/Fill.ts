import Graphics = PIXI.Graphics;

export interface Fill {

    /**
     * Fills generate their own graphics context since they can be scaled, rotated etc.
     * Flat structure to not force object creation per draw.
     *
     * @param x
     * @param y
     * @param width
     * @param height
     */
    fill(x: number, y: number, width: number, height: number): Graphics;

    /**
     * Return the graphics instance
     */
    getGraphics() : Graphics;
}