import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserManageService } from '../../services/user-manage.service';
import { Role } from '../../models/roles';

@Component({
  selector: 'app-edit-roles',
  standalone: true,
  imports: [FormsModule, NgFor,NgIf],
  templateUrl: './edit-roles.component.html',
  styleUrl: './edit-roles.component.scss'
})
export class EditRolesComponent {
  roles:Role[] = [
  ];


  constructor(private userService:UserManageService){}

  ngOnInit(){
    this.roles=this.userService.roles;
  }

  selectedRole = this.roles[0]; // Default to the first role
  newPermission: string = ''; // New permission input

  // Add a new permission to the selected role
  addPermission() {
    if (this.newPermission) {
      this.selectedRole.permissions.push(this.newPermission);
      this.newPermission = ''; // Clear the input field after adding
    }
  }

  // Remove a specific permission from the selected role
  removePermission(permissionIndex: number) {
    this.selectedRole.permissions.splice(permissionIndex, 1);
  }

  updatedRole:Role={name:'',permissions:[]};

  // Handle form submission (for demonstration, log the changes)
  onSubmit() {
    this.updatedRole=this.roles.find((role)=>role.name===this.selectedRole.name)?? { name: '', permissions: [] };;
    this.userService.updateRole(this.updatedRole,this.selectedRole.id)
    // alert('Changes saved successfully!');
  }
}
