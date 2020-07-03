import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: UserDataService) { }

  ngOnInit() {
  }
  clearUserDetails() {
    this.dataService.clearUserDetails()
  }
}
