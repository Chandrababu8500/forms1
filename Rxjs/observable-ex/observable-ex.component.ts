import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-ex',
  templateUrl: './observable-ex.component.html',
  styleUrls: ['./observable-ex.component.css']
})
export class ObservableExComponent {
  unsub: any;
  constructor(){}
  promise=new Promise((resolve,reject)=>{
     var name="chandra";
     if(name==="chmandra"){
      resolve("success");
      resolve("success");
      resolve("success");
     }
     else{
      reject("Not correct");
      reject("Not correct");
      reject("Not correct");


     }
  }).then(res=>console.log(res)).catch(err=>console.log(err))
  observable=new Observable((Subscriber)=>{
    Subscriber.next({id:100, name:"chandra",salary:50000});
    // Subscriber.next("My num is" + 2)
    // Subscriber.next("My num is" + 3)

  })
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.unsub=this.observable.subscribe(res=>{
      console.log(res)
    })
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // this.unsub;
  }
  unsubscribe(){
    this.unsub.unsubscribe();
  }
  subscribe(){
    this.observable.subscribe((ele:any)=>{
      console.log(ele)
    })
  }
}
