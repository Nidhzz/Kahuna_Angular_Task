import { Component, OnInit, Input } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() selectedUser: {}

  constructor() { }

  ngOnInit() {

  }
}
