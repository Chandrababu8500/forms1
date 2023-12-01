import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent {
 gender=["female","male","other"];
 userForm:FormGroup;
 ngOnInit(){
  this.userForm=new FormGroup({
    'firstname':new FormControl('',Validators.required),
    'lastname':new FormControl('',Validators.required),
    'email':new FormControl('',[Validators.required]),
    'gender':new FormControl('',Validators.required)
  })
 }
 onSubmit(){
  console.log(this.userForm.value)
 }
}
