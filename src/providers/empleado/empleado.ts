import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider} from '../auth/auth';
/*
  Generated class for the EmpleadoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmpleadoProvider {

  constructor(public http: HttpClient, public authSvce:AuthProvider) {

    console.log('Hello EmpleadoProvider Provider');
  }
  getEmpleados(){
  	return this.http.get(this.authSvce.ApiUrl()+'empleado')
  }
  getEmpleCatego(i){
    return this.http.get(this.authSvce.ApiUrl()+'vista_empleados_categoria/'+i)
  }
}
