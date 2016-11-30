import * as React from "react";
import {BasicGeometry} from "./sketch/BasicGeometry";
import {BasicChart} from "./sketch/BasicChart";

export default class PixiScene extends React.Component<any, any> {

    /*sketch = new BasicGeometry();*/
    sketch = new BasicChart();

    componentWillUnmount() {
        this.sketch.destroy();
    }

    componentDidMount() {
        this.sketch.setup();

        let animate = () => {
            this.sketch.render();
            requestAnimationFrame(animate);
        };

        animate();
    }

    render() {
        return (<div id="sketch"></div>);
    }
}