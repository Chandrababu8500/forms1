import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-ex',
  templateUrl: './forms-ex.component.html',
  styleUrls: ['./forms-ex.component.css']
})
export class FormsExComponent {
  
  res:any[]=[];
  userFormDetail:any;
  onsubmit(data:any){
    this.res.push(data);
    console.log(data)
    
  }
  ngOnInit(){
    this.userFormDetail={
      firstname:'marcus',
      lastname:'Johnson',
      street1:'ugp',
      street2:'nlr2'
    
    }
    // console.log(this.res.value)
    // console.log(this.res.values[1])
  }
     resetUserForm(data){
          data.reset()
      
        }
        // removeForm(){
        //  this.userFormDetail.reset();
        // }
}
