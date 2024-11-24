import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';
import { ErrorComponent } from "../error/error.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  isLogin: boolean = false;
  isLoading: boolean = false;

  router:Router=inject(Router)

  errorMessage: string | null = null;
  constructor(private Auth: AuthService) { }

  onFormSubmit(form: NgForm) {
    // console.log('Logging in with:', this.email, this.password);
    if (form.valid) {


      const email = form.value.email
      const password = form.value.password

      if (this.isLogin) {

        //Login logic
        this.Auth.login(email,password).subscribe({
          next:(res)=>{
            console.log(res)
            this.router.navigate(['/dashboard'])
          },
          error:(err)=>{console.log(err)}
        })

      }

      else {
        // Signup 
        this.isLoading = true;
        this.Auth.signUp(email, password).subscribe({
          next: (res) => {
            console.log(res)
            this.isLoading = false;
          },
          error: (errMsg) => {

            this.errorMessage = errMsg.error.error.message
            // // console.log(this.errorMessage)
            this.hideError();
          }
        })
      }

    }
    else {
      alert("Fill all fields")
    }
  }

  modeSwitch() {
    this.isLogin = !this.isLogin;
  }

  hideError() {
    setTimeout(() => {
      this.errorMessage = null;
    }, 3000)
  }

}
