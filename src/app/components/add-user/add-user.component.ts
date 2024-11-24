import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Role } from '../../models/roles';
import { UserManageService } from '../../services/user-manage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
// import { Router } from '';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  userForm: FormGroup;
  user?: User;
  userId: string | null = null;

  roles: Role[] = [];

  editUser?:User;

  constructor(private fb: FormBuilder, private userService: UserManageService, private router: Router, private route: ActivatedRoute) {
    // Initialize the form
    this.userForm = this.fb.group({
      name: [''],
      status: [false],
      role: [] // Default to 'Admin'
    });
  }

  ngOnInit() {


    this.roles = this.userService.roles;
  }


  onSubmit() {


    if (this.userForm.valid) {

      this.userService.addUser(this.userForm.value)
      this.userForm.reset();
      this.router.navigate(['/dashboard'])  
    }

    else {
      alert("Fill all the fileds")
    }
  }

  


}
