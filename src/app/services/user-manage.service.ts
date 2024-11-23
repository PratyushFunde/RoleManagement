import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';
import { Role } from '../models/roles';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UserManageService {


  http = inject(HttpClient)

  constructor() { this.getRoles() }



  roles: Role[] = []


  getRoles(){
    this.http.get<Role[]>('/api/roles.json').pipe(map((response)=>{
      let roles=[]

      for(let key in response){

        if(response.hasOwnProperty(key))
        {
          roles.push({...response[key],id:key})

        }
       

      }
      return roles;
    })).subscribe((roles)=>{

      this.roles=roles;
    })
    this.setUsersPermissions();
  }

  addRoles(newRole: Role) {

    this.http.post('/api/roles.json',newRole).subscribe((res)=>{
      alert("Role Added Sussesfully !")
    })
    
  }

  users: User[] = [
  ]


  setUsersPermissions(): void {
    // Loop through all users
    this.users.forEach(user => {
      // Find the role by matching the user's role with the roles array
      const userRole = this.roles.find(role => role.name === user.role);

      // If the role exists, set the user's permissions based on that role
      if (userRole) {
        user.permissions = userRole.permissions;
      } else {
        // If the role doesn't exist, set an empty array or handle it as needed
        user.permissions = [];
      }
    });
  }

  private getUsers(){
    this.http.get<{[key:string]:User}>('/api/users.json').pipe(map((response)=>{
      //Convert To Array
      let users:User[]=[]

      for(let key in response){

        if(response.hasOwnProperty(key))
        {
          users.push({...response[key],id:key})

        }

      }
      return users;
    })).subscribe((users)=>{

      this.users=users;
    })
  }

  getAllUsers() {
    this.getUsers()
    this.setUsersPermissions();
    return this.users
  }


  addUser(newUser: User) {

    // newUser.id = String(this.users.length + 1)
    // this.users.push(newUser)
    this.http.post('/api/users.json', newUser).subscribe((response) => {
     
      alert("User Added Successfully");
      window.location.reload()
    })
  }

  deleteUser(id?:string){
    this.http.delete('/api/users/'+id+'.json').subscribe((response)=>{
      
    })
    window.location.reload();
  }

  userEdit?:User;

 getEditedUser(userData:User,userId?:string){
  // this.userEdit=user;


  this.http.put('/api/users/'+userId+'.json',userData).subscribe((res)=>{
    alert("Record updated successfully")
    window.location.reload()
  })
 }

  updateRole(newRole:Role,id?:string)
  {
    this.http.put('/api/roles/'+id+'.json',newRole).subscribe((response)=>{})
    alert('Updated Successfully');
  }

}
