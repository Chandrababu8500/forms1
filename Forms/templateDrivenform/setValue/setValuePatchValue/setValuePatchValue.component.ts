import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-setValuePatchValue',
  templateUrl: './setValuePatchValue.component.html',
  styleUrls: ['./setValuePatchValue.component.css']
})
export class SetValuePatchValueComponent implements OnInit {
res:any;
  constructor() { }
@ViewChild('userForm') userForm!:NgForm;
  ngOnInit() {

  }
  userName:string='';
  password:string='';
  User={
    username:'',
    password:''
  }
  submitForm=false;
  submitedForm(){
    this.submitForm=true;
    this.User.username=this.userName;
    this.User.password=this.password;


  }
  onSubmitUserForm(){
      // this.res=e;
      console.log(this.userForm)
  }
  addInfoUser(){
     this.userForm.form.patchValue({
      userDetails:{
        userName:'Raja',
        password:25000
      }
     })
  }
  resetForm(){
  this.userForm.reset();
  }
}
