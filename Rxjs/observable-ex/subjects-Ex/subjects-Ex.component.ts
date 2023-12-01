import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subjects-Ex',
  templateUrl: './subjects-Ex.component.html',
  styleUrls: ['./subjects-Ex.component.css']
})
export class SubjectsExComponent implements OnInit {

  constructor() {
    console.log("Subject works")
    const sub=new Subject();
    sub.subscribe(res=>console.log(res));
    sub.subscribe(res=>console.log(res));
    sub.next(Math.random());
    // sub.next(Math.random());
   }

  ngOnInit() {
    console.log("Observable works")
    const obs=new Observable((subscriber)=>{
      subscriber.next(Math.random());
      // subscriber.next(Math.random());
    });
    obs.subscribe(res=>console.log(res));
    obs.subscribe(res=>console.log(res));

  
  }

}
