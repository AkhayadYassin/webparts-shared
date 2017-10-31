"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var angular2_ladda_1 = require("angular2-ladda");
var api_service_1 = require("./services/api.service");
var window_ref_1 = require("./services/window-ref");
var mediator_1 = require("./services/mediator");
var poc_http_interceptor_1 = require("./services/poc-http.interceptor");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
            providers: [mediator_1.Mediator, api_service_1.ApiService],
        };
    };
    return SharedModule;
}());
SharedModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    angular2_ladda_1.LaddaModule
                ],
                declarations: [],
                providers: [
                    api_service_1.ApiService, window_ref_1.WindowRef, mediator_1.Mediator,
                    {
                        provide: http_1.HTTP_INTERCEPTORS,
                        useClass: poc_http_interceptor_1.PocHttpInterceptor,
                        multi: true,
                    }
                ],
                exports: [
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    angular2_ladda_1.LaddaModule
                ]
            },] },
];
/** @nocollapse */
SharedModule.ctorParameters = function () { return []; };
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map