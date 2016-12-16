export class TweenParams {

}

export class Tweener {
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

}