import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-lookup',
  templateUrl: './user-lookup.component.html',
  styleUrls: ['./user-lookup.component.css']
})
export class UserLookupComponent implements OnInit {
  name: string;

  constructor() { }
  ngOnInit() {}

  search (name: string){
    this.name = name;
    console.log(this.name);
  }

}
