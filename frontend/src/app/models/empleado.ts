export class Empleado {

constructor(_id= '', Nombre='', Puesto='', Oficina='', Salario=0){
    this._id = _id;
    this.Nombre= Nombre;
    this.Puesto= Puesto;
    this.Oficina=Oficina;
    this.Salario= Salario; 
    }
_id: string;
Nombre: string;
Puesto: string;
Oficina: string;
Salario: Number;

}
