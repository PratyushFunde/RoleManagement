import { Routes } from '@angular/router';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddRolesComponent } from './components/add-roles/add-roles.component';
import { EditRolesComponent } from './components/edit-roles/edit-roles.component';

export const routes: Routes = [
    {path:'',component:UserManagementComponent},
    {path:'add',component:AddUserComponent},
    {path:'add-role',component:AddRolesComponent},
    {path:'edit-roles',component:EditRolesComponent},
];
