import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
    selector:'app-pipe',
    templateUrl:'./pipe.component.html',
    styleUrls:['./pipe.component.css']
})
export class PipeComponent{
    users:any;
    constructor(private http:HttpClient){

    }
    public listOfUsers(){
     this.http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(res=>{
        this.users=res;
        console.table(this.users)
    })
    }
    ngOnInit(){
       
        this.listOfUsers();
    }
}