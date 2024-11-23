import { Component, HostListener } from '@angular/core';
import { User } from '../../models/user';
import { UserManageService } from '../../services/user-manage.service';
import {  NgFor, NgIf } from '@angular/common';
import {  Router,  } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Role } from '../../models/roles';
// import { Router } from 'express';
@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [NgFor, HeaderComponent, NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {

  isEdit: boolean = false;
  filteredUsers!: User[];
  searchTerm: string = '';
  selectedStatus:string=''
  isEmpty:boolean=false;
  layout:string='table'
  showTable:boolean=true;
  isSmallScreen: boolean = false;

  constructor(private userService: UserManageService, private router: Router) { }

  users: User[] = []
  roles: Role[] = []
  editUser: User = { name: 'Default', id: '', permissions: [], status: false, role: '' };
  ngOnInit() {
    this.roles = this.userService.roles;
    this.users = this.userService.getAllUsers();
    this.filteredUsers = [...this.users];
    this.checkScreenSize()
  }


  deleteUser(id?: string) {
    this.userService.deleteUser(id);
  }


  userId?: string;
  onEditClick(user: User) {
    this.isEdit = true;
    // this.userService.getEditedUser(user);
    this.editUser = user;
    this.userId = user.id;
    // this.router.navigate(['/add'])
  }



  handleUpdate(form: NgForm) {

    this.userService.getEditedUser(form.value, this.userId)
    this.isEdit = false;
  }

  filterUsers() {
    this.filteredUsers = this.users.filter(user => {
      const matchesSearchTerm =
        !this.searchTerm.trim() ||
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus =
        !this.selectedStatus ||
        (this.selectedStatus === 'active' && user.status) ||
        (this.selectedStatus === 'inactive' && !user.status);
  
      return matchesSearchTerm && matchesStatus;
    });
  }

  handleLayoutChange(){

    if(this.layout=='table')
    {
      this.showTable=true
    }
    if(this.layout=='grid'){
      this.showTable=false;
    }

  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    const screenWidth = window.innerWidth;
    this.isSmallScreen = screenWidth < 768; // Set your breakpoint (e.g., 768px for tablets)
    if(this.isSmallScreen){
      this.layout="grid"
      this.showTable=false
    }
    if(!this.isSmallScreen){
      this.layout="table"
      this.showTable=true;
    }
  }

}
