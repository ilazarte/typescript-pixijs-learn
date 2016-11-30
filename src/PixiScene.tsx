import * as React from "react";
import {BasicGeometry} from "./sketch/BasicGeometry";

export default class PixiScene extends React.Component<any, any> {

    sketch = new BasicGeometry();

    componentDidUpdate() {
        console.log("did update");
    }

    componentWillUnmount() {
        console.log("will unmount");
        this.sketch.destroy();
    }

    componentDidMount() {
        console.log("did mount");
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