import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
 

  displayedColumns: string[] = ['id', 'firstName','lastName','lastName','mobileNumber','actions'];
  users: User[] = [];
  dataSource = this.users;
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.getAllUsers()
  }
  private getAllUsers() {
    this.userService.listAllUser().subscribe(data => {
      this.dataSource = data
      console.log(this.dataSource)
    });
  }
  id!: number;

 
  deleteUser(id:number){
    console.log(id)
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data)
      this.ngOnInit()
    });
  }
}
