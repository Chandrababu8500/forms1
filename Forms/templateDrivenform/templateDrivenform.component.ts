import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateDrivenform',
  templateUrl: './templateDrivenform.component.html',
  styleUrls: ['./templateDrivenform.component.css']
})
export class TemplateDrivenformComponent implements OnInit {
@ViewChild('empForm') empForm!:NgForm; 
  constructor() { }
firstname:string='';
lastname:string='';
  ngOnInit() {
  }
  employeeForm(){
    console.log(this.empForm)
   
  }

}
