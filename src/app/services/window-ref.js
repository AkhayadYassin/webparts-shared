"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
WindowRef.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
WindowRef.ctorParameters = function () { return []; };
exports.WindowRef = WindowRef;
//# sourceMappingURL=window-ref.js.map