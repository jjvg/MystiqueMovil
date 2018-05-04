var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { PrincipalPage } from './../pages/principal/principal';
import { PromocionesPage } from './../pages/promociones/promociones';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { PerfilPage } from '../pages/perfil/perfil';
import { SolicitudesPage } from '../pages/solicitudes/solicitudes';
import { TipsPage } from '../pages/tips/tips';
import { ReclamosPage } from '../pages/reclamos/reclamos';
import { ServiciosRPage } from '../pages/servicios-r/servicios-r';
import { CitasPage } from '../pages/citas/citas';
import { SugerenciasPage } from '../pages/sugerencias/sugerencias';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = LoginPage;
        this.pages = [
            { title: 'Inicio', component: PrincipalPage, icon: 'home' },
            { title: 'Perfil', component: PerfilPage, icon: 'contact' },
            { title: 'Citas', component: CitasPage, icon: 'calendar' },
            { title: 'Solicitudes', component: SolicitudesPage, icon: 'paper-plane' },
            { title: 'Reclamos', component: ReclamosPage, icon: 'filing' },
            { title: 'Servicios Recibidos', component: ServiciosRPage, icon: 'list-box' },
            { title: 'Buzon de Comentarios', component: SugerenciasPage, icon: 'mail' },
            { title: 'Promociones', component: PromocionesPage, icon: 'star' },
            { title: 'Consejos', component: TipsPage, icon: 'megaphone' }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (p) {
        this.nav.setRoot(p.component);
    };
    MyApp.prototype.exit = function () {
        this.nav.setRoot(LoginPage);
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map