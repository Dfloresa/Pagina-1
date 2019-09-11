import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { Empleado } from '../models/empleado'


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  selectedEmployee: Empleado;
  employees: Empleado[];
  readonly URL_API ='http://localhost:3000/api/employees';

  constructor(private http: HttpClient) {
    this.selectedEmployee = new Empleado();
   }

  getEmployees(){
  return this.http.get(this.URL_API);
 
  }

  postEmployees(Empleado: Empleado){
    return this.http.post(this.URL_API, Empleado);
  }

  putEmployee(Empleado: Empleado){

    return this.http.put(this.URL_API + `/${Empleado._id}`, Empleado);
  }

  deleteEmployee(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}