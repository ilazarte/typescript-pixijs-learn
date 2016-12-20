import Graphics = PIXI.Graphics;

export interface Line {

    render(x1: number,
           y1: number,
           x2: number,
           y2: number,
           graphics: Graphics): Graphics;
}