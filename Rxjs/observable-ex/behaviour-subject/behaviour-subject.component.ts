import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, from, of } from 'rxjs';

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrls: ['./behaviour-subject.component.css']
})
export class BehaviourSubjectComponent {
  data:any[]=[];
  res1=[1,2,3,4,5];

  res2=["chandra","hari"];
  res3=of([this.res1,this.res2])
 constructor(){

 }
//  obs=Observable.create(this.res3)
 observable=new Observable((observer)=>{
  observer.next(of(this.res1,this.res2))
//  setTimeout(()=>{ observer.next(1)},1000)
//  setTimeout(()=>{ observer.next(2)},1000)
//  setTimeout(()=>{ observer.next(3)},1000)
//  setTimeout(()=>{ observer.next(4)},1000)
// observer.next([1,2,3,4,5])
// setTimeout(()=>{observer.next(1)},1000);
// setTimeout(()=>{observer.next(2)},2000)
// setTimeout(()=>{observer.next(3)},3000);
// // setTimeout(()=>{observer.error(new Error("Something Wrong"))},2000)
// setTimeout(()=>{observer.next(4)},4000);
// setTimeout(()=>{observer.complete()},5000);




 })
 //subject
 subject=new Subject();
 behaviourSub=new BehaviorSubject<any>(200);
 replySub=new ReplaySubject(1);
 asyncSub=new AsyncSubject();

 ngOnInit(): void {
  this.subject.next(100);

   this.subject.subscribe(res=>console.log(res))

      this.subject.subscribe(res=>console.log(res))
      this.subject.subscribe(res=>console.log(res))
    //Behaviour Subject
    this.behaviourSub.subscribe(res=>console.log(res));
    this.behaviourSub.next(250)
    this.behaviourSub.subscribe(res=>console.log(res));
    this.behaviourSub.next("chandra")
    this.behaviourSub.subscribe(res=>console.log(res));
    this.behaviourSub.subscribe(res=>console.log(res));
     console.log("asuync subject works");

     this.replySub.next(1);
     this.replySub.next(2)
     this.replySub.next(3)
    this.replySub.next(4);
    this.replySub.next(5);
    this.replySub.subscribe(res=>console.log(res));
    this.replySub.next(6);
    this.replySub.next(7);
    this.replySub.next(8);
    this.replySub.subscribe(res=>console.log(res));

// Async Subject

console.log("Async subject emits")
this.asyncSub.next(1);
this.asyncSub.next(2);
this.asyncSub.next(3);
this.asyncSub.subscribe(res=>console.log(res))
this.asyncSub.complete()
this.asyncSub.next("chandra");
this.asyncSub.next("chandra");
this.asyncSub.next("chandra");
this.asyncSub.complete()

this.asyncSub.subscribe(res=>console.log(res))

 }
 clickObservable(){
  this.res3.subscribe(res=>console.log(res))
  this.observable.subscribe((val:any)=>{
      // this.obs.subscribe((val:any)=>{

    // this.data.push(val);
    console.log(val)
  },
  (error:any)=>{
        alert(error.message)
  },
  ()=>{
    alert("The Stream has ended")
  }
  )
 }
}
