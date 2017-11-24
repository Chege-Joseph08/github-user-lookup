import { Component, OnInit } from '@angular/core';
import { SearchUsersService } from '../user-lookup.service';

@Component({
  selector: 'app-user-lookup',
  templateUrl: './user-lookup.component.html',
  styleUrls: ['./user-lookup.component.css']
})
export class SearchUsersComponent implements OnInit {
  username: string;


  constructor(private searchService: SearchUsersService) {}
  ngOnInit() {}

  search(username: string) {
    this.username = username;
    console.log(this.username);
  }
}
