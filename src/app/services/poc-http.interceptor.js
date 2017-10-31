"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var mediator_1 = require("./mediator");
var rxjs_1 = require("rxjs");
var PocHttpInterceptor = (function () {
    function PocHttpInterceptor(router, mediator) {
        this.router = router;
        this.mediator = mediator;
    }
    PocHttpInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).catch(function (error) {
            console.log(error);
            if (error.status === 403) {
                _this.forbidden();
            }
            else {
                _this.redirectToErrorPage();
            }
            return rxjs_1.Observable.throw('Server-side error occured');
        });
    };
    PocHttpInterceptor.prototype.forbidden = function () {
        var self = this;
        self.mediator.publish("errors", "Verboden!");
        // console.log('verboden!');
        // self.router.navigate(['404']);
        return rxjs_1.Observable.empty();
    };
    PocHttpInterceptor.prototype.redirectToErrorPage = function () {
        var self = this;
        self.mediator.publish("errors", " ERROR --> REDIRECT!");
        // console.log('fout en redirect naar!');
        // self.router.navigate(['404']);
        return rxjs_1.Observable.empty();
    };
    return PocHttpInterceptor;
}());
PocHttpInterceptor.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
PocHttpInterceptor.ctorParameters = function () { return [
    { type: router_1.Router, },
    { type: mediator_1.Mediator, },
]; };
exports.PocHttpInterceptor = PocHttpInterceptor;
//# sourceMappingURL=poc-http.interceptor.js.map