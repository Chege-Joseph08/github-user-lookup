import { Component, OnInit } from '@angular/core';
import { UserLookupService } from '../user-lookup.service';

@Component({
  selector: 'app-user-lookup',
  templateUrl: './user-lookup.component.html',
  styleUrls: ['./user-lookup.component.css']
})
export class UserLookupComponent implements OnInit {
  name: string;

  results: any[] = []; // This will hold the data coming from the service
  selected: boolean = false; // Flag to check if a user is clicked or not
  selectedUser: any; // presently Selected user details
  error_text: string = ""; // So called error reporing text to the end user

  constructor(private searchService: UserLookupService) { }
  ngOnInit() {}

  search (name: string){
    this.name = name;
    console.log(this.name);
  }

}
