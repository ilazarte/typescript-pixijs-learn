import {Sketch} from "../Sketch";
import Graphics = PIXI.Graphics;
import Text = PIXI.Text;
import {KeyMap} from "../utils/KeyMap";
import {Streams} from "../utils/Streams";
import Observable = Rx.Observable;

export class KeyStrokes extends Sketch {

    text: Text;

    tween(on: any,
          from: any,
          to: any,
          duration: number,
          callback?: (progress: any) => void) {

        let keys = Object.keys(from),
            len = keys.length,
            key = "",
            i = 0,
            update = function() {
                for (i = 0; i < len; i++) {
                    key = keys[i];
                    on[key] = this[key];
                }
            },
            updatecb = function() { callback(this) },
            cb = callback ? updatecb : update;

        let tween = new TWEEN.Tween(from)
            .easing(TWEEN.Easing.Bounce.In)
            .to(to, duration)
            .onUpdate(cb)
            .start();
    }

    /**
     * handler for a key press.
     * @param obs
     * @param code
     */
    key(obs: Observable<KeyboardEvent>, code: number) {
        obs.filter(e => e.keyCode === code)
            .subscribe(e => {
                this.text.text = e.key;
                this.tween(
                    this.text, {
                        alpha: 1.0,
                        scale: 1.0
                    }, {
                        alpha: 0.0,
                        scale: 10
                    }, 1000,
                    (progress) => {
                        this.text.alpha = progress.alpha;
                        this.text.scale.set(progress.scale);
                    });
            });
    }

    setup(): void {

        this.setRenderer(PIXI.autoDetectRenderer(800, 600, {antialias: true}));
        this.setStage(new PIXI.Container());

        let keyups$ = <Observable<KeyboardEvent>> Streams.keyup().share();
        this.key(keyups$, KeyMap.A);
        this.key(keyups$, KeyMap.D);

        this.stage.interactive = true;

        let style = {
            fontFamily : 'Arial',
            fontSize : '36px',
            fontStyle : 'italic',
            fontWeight : 'bold',
            fill : '#F7EDCA',
            stroke : '#4a1850',
            strokeThickness : 5,
            dropShadow : true,
            dropShadowColor : '#000000',
            dropShadowAngle : Math.PI / 6,
            dropShadowDistance : 6,
            wordWrap : true,
            wordWrapWidth : 440,
        };

        this.text = new Text('Start', style);
        let text = this.text;

        text.x = 400;
        text.y = 300;
        text.anchor.set(0.5, 0.5);

        this.stage.addChild(text);
    }

    update(elapsed: number) {
        TWEEN.update();
    }
}