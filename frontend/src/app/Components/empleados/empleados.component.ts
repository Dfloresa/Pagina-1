import { Component, OnInit } from '@angular/core';
import { EmpleadoService} from '../../services/empleado.service'
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Empleado } from 'src/app/models/empleado';
import Swal from 'sweetalert2';
import {} from '../../../../../server/database.js';




@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [EmpleadoService]
})
export class EmpleadosComponent implements OnInit {
  

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.getEployees();
  }

  addEmployee(form: NgForm){

    ////////////////////////////////////////////////////////////////////////////////

    db.collection("users").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
  







    ////////////////////////////////////////////////////////////////////////////////
    this.empleadoService.postEmployees(form.value).subscribe(res => {
      console.log(res);
      form.reset();
      this.getEployees();
    ///////////////////////////// Mensaje de éxito
      Swal.fire({
        allowOutsideClick: false,
        type: 'success',
        text: 'Guardado con éxito'
      });
    //////////////////////////////////  
    });
  }

  getEployees(){
    this.empleadoService.getEmployees(). subscribe(res => {
      this.empleadoService.employees = res as Empleado[];
      console.log(res);
    });
  }

  limpiarFormulario(form?: NgForm){
    if(form){
      form.reset();
      this.empleadoService.selectedEmployee = new Empleado();
    }
  }

}

//comentario de prueba 