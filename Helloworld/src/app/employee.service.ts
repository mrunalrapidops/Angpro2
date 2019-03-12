import { Injectable } from '@angular/core';
import { literalMap } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
getEmploees(){
    return[
      {"id":1,"name":"Mrunal","age":20},
      {"id":2,"name":"Ram","age":50},
      {"id":3,"name":"Rahim","age":40}
    ];
  }  
}
