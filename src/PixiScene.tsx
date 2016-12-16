import * as React from "react";
import {BasicGeometry} from "./sketch/BasicGeometry";
import {BasicChart} from "./sketch/BasicChart";
import {KeyStrokes} from "./sketch/KeyStrokes";
import {Grass} from "./sketch/Grass";

export default class PixiScene extends React.Component<any, any> {

    /*sketch = new BasicGeometry();*/
    /*sketch = new BasicChart();*/
    /*sketch = new KeyStrokes();*/
    sketch = new Grass();

    componentWillUnmount() {
        this.sketch.destroy();
    }

    componentDidMount() {
        let sketch = this.sketch,
            previous = new Date().getTime(),
            timediff = 0;

        sketch.setup();

        /* TODO move this into base sketch so it enables pause/start */
        let animate = (current: number) => {
            timediff = current - previous;
            sketch.update(timediff);
            sketch.render();
            sketch.renderer.render(sketch.stage);
            previous = current;
            requestAnimationFrame(animate);
        };

        animate(previous);
    }

    render() {
        return (<div id="sketch"></div>);
    }
}