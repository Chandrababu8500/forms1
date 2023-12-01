import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validtion',
  templateUrl: './validtion.component.html',
  styleUrls: ['./validtion.component.css']
})
export class ValidtionComponent implements OnInit {
  studentForm:FormGroup;
  constructor(private fb:FormBuilder){

  }
  ngOnInit(){
    this.studentForm=this.fb.group({
           'firstname':['',[Validators.required, Validators.minLength(5)]],
           'lastname':['',[Validators.required, Validators.minLength(5)]],
           'Address':[],
           'mobile':this.fb.array([this.createElement() ])
  })
}
onstudentForm(){
  console.log(this.studentForm.value)
}
createElement(){
  return this.fb.control('', Validators.required);
}
}
