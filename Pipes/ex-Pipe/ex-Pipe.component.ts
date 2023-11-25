import { Component, OnInit } from '@angular/core';
import { UserDetails } from './user-details';

@Component({
  selector: 'app-ex-Pipe',
  templateUrl: './ex-Pipe.component.html',
  styleUrls: ['./ex-Pipe.component.css']
})
export class ExPipeComponent implements OnInit {

  constructor() { }
  userInfo:UserDetails[]=[
    {
      id:10,
      name:"Ravi",
      gender:"male",
      salary:50000,
      dob:new Date('10/21/1994'),
      place:"hyderbad"
    },
    {
      id:11,
      name:"Ramya",
      gender:"female",
      salary:60000,
      dob:new Date('9/11/1995'),
      place:"Nellore"
    },
    {
      id:12,
      name:"Ashok",
      gender:"male",
      salary:30000,
      dob:new Date('5/21/1980'),
      place:"Vijayabada"
    },
    {
      id:13,
      name:"Rani",
      gender:"female",
      salary:80000,
      dob:new Date('5/21/1978'),
      place:"Karnool"
    }

  ]
  ngOnInit() {
  }

}
