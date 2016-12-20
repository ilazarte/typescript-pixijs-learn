///<reference path="../node_modules/@types/pixi.js/index.d.ts"/>
///<reference path="../node_modules/@types/noisejs/index.d.ts"/>
///<reference path="../node_modules/rx/ts/rx.all.d.ts"/>


import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import PixiScene from "./PixiScene";
import App from "./App";

const rootEl = document.getElementById("root");

ReactDOM.render(
    <AppContainer>
        <PixiScene/>
    </AppContainer>,
    rootEl);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./PixiScene", () => {
        ReactDOM.unmountComponentAtNode(rootEl);
        const NextApp = require("./PixiScene").default;
        ReactDOM.render(
            <AppContainer>
                <NextApp/>
            </AppContainer>,
            rootEl
        )
    });
}