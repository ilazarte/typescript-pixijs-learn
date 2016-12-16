/**
 * https://github.com/Reactive-Extensions/RxJS/blob/master/examples/canvaspaint/canvaspaint.js
 * https://github.com/Reactive-Extensions/RxJS/blob/master/examples/keyboard-shortcuts/keyboard-shortcuts.js
 */

export class Streams {
    static ready() {
        return Rx.Observable.create(o => {
            let handler = () => {
                o.onNext(true);
                o.onCompleted();
            };

            let added = false;
            if (document.readyState === 'complete') {
                handler();
            } else {
                document.addEventListener("DOMContentLoaded", handler, false);
                added = true;
                return Rx.Disposable.create(() => {
                    added && document.removeEventListener("DOMContentLoaded", handler, false);
                })
            }
        }).take(1);
    }

    static mousemove(element : Node, selector : string) {
        return Rx.Observable.fromEvent(element, 'mousemove');
    };

    static mouseup(element : Node, selector : string) {
        return Rx.Observable.fromEvent(element, 'mouseup');
    };

    static mousedown(element : Node, selector : string) {
        return Rx.Observable.fromEvent(element, 'mousedown');
    };

    static click(element : Node, selector : string) {
        return Rx.Observable.fromEvent(element, 'click');
    };

    static keyup(element: Node = document) {
        return Rx.Observable.fromEvent(element, 'keyup');
    }

    static keydown(element: Node = document) {
        return Rx.Observable.fromEvent(element, 'keydown');
    }
}