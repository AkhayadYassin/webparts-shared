"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var ApiService = (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
    }
    ApiService.prototype.getMessage = function (url) {
        var baseUrl = "http://localhost/GuestWebApp/";
        return this.httpClient.get(baseUrl + url);
    };
    ApiService.prototype.postMessage = function (url, body) {
        return this.httpClient.post(url, body);
    };
    return ApiService;
}());
ApiService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ApiService.ctorParameters = function () { return [
    { type: http_1.HttpClient, },
]; };
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map