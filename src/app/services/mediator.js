"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var window_ref_1 = require("./window-ref");
var Mediator = (function () {
    function Mediator(windowRef) {
        this.windowRef = windowRef;
        this._mediator = this.windowRef.nativeWindow.parent.getMediator();
        this.moduleName = this._mediator.moduleName;
    }
    Mediator.prototype.subscribe = function (channel, fn) {
        this._mediator.subscribe(channel, fn);
    };
    Mediator.prototype.publish = function (channel, data) {
        this._mediator.publish(channel, data);
    };
    Mediator.prototype.unsubscribe = function (channel, fn) {
        this._mediator.unsubscribe(channel, fn);
    };
    Mediator.prototype.unsubscribeAll = function () {
        this._mediator.remove();
    };
    return Mediator;
}());
Mediator.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
Mediator.ctorParameters = function () { return [
    { type: window_ref_1.WindowRef, },
]; };
exports.Mediator = Mediator;
//# sourceMappingURL=mediator.js.map