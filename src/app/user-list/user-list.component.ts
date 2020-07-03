import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import * as moment from 'moment';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = {}
  selectedRow = 0;
  selectedUser;
  gender = ""
  onClickHandler(user, rowIndex) {
    //   this.selectedUser = user
    this.selectedRow = rowIndex;
    this.dataService.setUserDetails(user)
    this.selectedUser = this.dataService.user
  }

  constructor(private dataService: UserDataService, private datepipe: DatePipe) {
  }

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any) => {
      this.users = data;
      this.users['results'].forEach(element => {
        const date1 = element.dob.date
        element.dob.date = this.datepipe.transform(date1, 'yyyy-MM-dd');
      });

    })
  }

  ngOnChanges() {
    console.log("ngOnChanges() called ")
  }
  ngDoCheck() {
    console.log("ngDoCheck() called")
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit() called")
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked() called")
  }
}
