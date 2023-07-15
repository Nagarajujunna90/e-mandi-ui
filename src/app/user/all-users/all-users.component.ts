import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


export interface PeriodicElement {
  firstName: string;
  id: number;
  mobileNumber: number;
  lastName: string;
}
const ELEMENT_DATA: User[] = [
  { id: 1, firstName: 'Hydrogen', mobileNumber: 1.0079, lastName: 'H' },
  { id: 2, firstName: 'Helium', mobileNumber: 4.0026, lastName: 'He' },
  { id: 3, firstName: 'Lithium', mobileNumber: 6.941, lastName: 'Li' },
  { id: 4, firstName: 'Beryllium', mobileNumber: 9.0122, lastName: 'Be' },
  { id: 5, firstName: 'Boron', mobileNumber: 10.811, lastName: 'B' },
  { id: 6, firstName: 'Carbon', mobileNumber: 12.0107, lastName: 'C' },
  { id: 7, firstName: 'Nitrogen', mobileNumber: 14.0067, lastName: 'N' },
  { id: 8, firstName: 'Oxygen', mobileNumber: 15.9994, lastName: 'O' },
  { id: 9, firstName: 'Fluorine', mobileNumber: 18.9984, lastName: 'F' },
  { id: 10, firstName: 'Neon', mobileNumber: 20.1797, lastName: 'Ne' },
];
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {

  displayedColumns: string[] = ['id', 'firstName', 'mobileNumber', 'lastName'];
  //dataSource = ELEMENT_DATA;
  // displayedColumns: string[] = ['id', 'firstName', 'mobileNumber', 'mobileNumber'];
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
      // this.dataSource =new MatTableDataSource<User>(this.users);
      // console.log(this.dataSource)

    });
  }
  id!: number;
  // user: User = new User();
  // isLoading = true;
  // dataSource: MatTableDataSource<any>;
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ViewChild(MatSort, { static: true }) sort: MatSort;
  // //  dataSource :  MatTableDataSource<User>;
  // //  @ViewChild(MatPaginator) paginator: MatPaginator;
  // //  @ViewChild(MatSort) sort: MatSort;
  // ngOnInit() {
  //   this.userService.listAllUser().subscribe(data => {
  //     this.users = data;
  //     console.log(this.users)
  //      this.dataSource =new MatTableDataSource(data);
  //     // console.log(this.dataSource)
  //     this.isLoading = false;
  //     this.dataSource.paginator = this.paginator;
  //     this.dataSource.sort = this.sort;

  //   });
  // }


  // // private getAllUsers() {
  // //   this.userService.listAllUser().subscribe(data => {
  // //     this.users = data
  // //     console.log(this.users)
  // //     this.dataSource =new MatTableDataSource<User>(this.users);
  // //     console.log(this.dataSource)
  // //   });
  // // }


}
