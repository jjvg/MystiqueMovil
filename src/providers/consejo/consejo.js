var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
var API_URL = "http://localhost:3000/api/";
/*
  Generated class for the ConsejoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConsejoProvider = /** @class */ (function () {
    function ConsejoProvider(http) {
        this.http = http;
        this.URL_consejo = "consejo";
        console.log('Hello ConsejoProvider Provider');
    }
    ConsejoProvider.prototype.getConsejo = function () {
        return this.http.get(API_URL + this.URL_consejo);
    };
    ConsejoProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ConsejoProvider);
    return ConsejoProvider;
}());
export { ConsejoProvider };
//# sourceMappingURL=consejo.js.map