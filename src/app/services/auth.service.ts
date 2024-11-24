import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthResponse } from '../models/AuthResponse';
import { catchError, Subject, tap, throwError } from 'rxjs';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  http: HttpClient = inject(HttpClient);
  admin=new Subject<Admin>();

  signUp(email: string, password: string) {
    const data = { email: email, password: password, returnSecureToken: true }
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[YOUR_API_KEY]', data)
    .pipe(tap((res)=>{
      this.handleCreatedUser(res);
    }))

  }

  login(email: string, password: string) {
    const data = { email: email, password: password, returnSecureToken: true }
    console.log(data)
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[YOUR_API_KEY]', data)
    .pipe(tap((res)=>{this.handleCreatedUser(res)}))
  }

  showAlert(){

    alert('Alert called')
  }

  private handleError(err: any) {
    let errorMessage = 'Unknown error occured'

    if (!err.error || !err.error.error) {
      return throwError(() => errorMessage)
    }

    switch (err.error.error.message) {
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email not exits'
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Wrong Password'
        break;
      case 'USER_DISABLED':
        errorMessage = 'User is disabled'
        break;
    }
    return throwError(() => errorMessage)
  }

  private handleCreatedUser(res:any){
    const ExpInS=new Date().getTime()+ +res.expiresIn*1000
      const ExpIn=new Date(ExpInS)
      const admin =new Admin(res.email,res.localId,res.idToken,ExpIn)
      this.admin.next(admin)
  }

}
