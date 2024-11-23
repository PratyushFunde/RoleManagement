import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserManageService } from '../../services/user-manage.service';

@Component({
  selector: 'app-add-roles',
  standalone: true,
  imports: [NgFor,ReactiveFormsModule],
  templateUrl: './add-roles.component.html',
  styleUrl: './add-roles.component.scss'
})
export class AddRolesComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder,private userService:UserManageService) {
    this.userForm = this.fb.group({
      name: [''], // Name field
      permissions: this.fb.array([]) // Permissions array
    });
  }

  // Getter for the permissions FormArray
  get permissions(): FormArray {
    return this.userForm.get('permissions') as FormArray;
  }

  // Method to add a new permission
  addPermission(): void {
    this.permissions.push(new FormControl(''));
  }

  // Method to remove a permission
  removePermission(index: number): void {
    this.permissions.removeAt(index);
  }

  // Method to handle form submission
  onSubmit(): void {
    
    if(this.userService.roles.some(user=>user.name===this.userForm.value.name)){

      alert("Role name already exists!")
    }
    else if(this.userForm.valid)
      {
  
        this.userService.addRoles(this.userForm.value);
        this.userForm.reset();
       // Logs the form value as {name: string, permissions: string[]}
      }
    else{

      alert("Fill all fields");
    }
  }
}
