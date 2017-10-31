"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_not_found_component_1 = require("./components/page-not-found/page-not-found.component");
// WildCardRoutingModule
var WildcardRoutingModule = (function () {
    function WildcardRoutingModule() {
    }
    return WildcardRoutingModule;
}());
WildcardRoutingModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    router_1.RouterModule.forChild([
                        { path: "404", component: page_not_found_component_1.PageNotFoundComponent },
                        { path: "**", redirectTo: '' } // path "**" is een wildcard binnen de routing table.
                    ])
                ],
                declarations: [page_not_found_component_1.PageNotFoundComponent],
                exports: [
                    router_1.RouterModule
                ]
            },] },
];
/** @nocollapse */
WildcardRoutingModule.ctorParameters = function () { return []; };
exports.WildcardRoutingModule = WildcardRoutingModule;
//# sourceMappingURL=shared.routing.js.map