import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { DeleteUserComponent } from './Components/delete-user/delete-user.component';
import { ErrorComponent } from './Components/error/error.component';
import { UpdateUserComponent } from './Components/update-user/update-user.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [{ path: '', redirectTo:'users',pathMatch: 'full'},
{ path: 'users', component:UsersComponent },
{ path: 'users/:id', component:UserDetailsComponent },
{ path: 'adduser', component:AddUserComponent },
{ path: 'users/update/:id', component:UpdateUserComponent },
{ path: 'users/delete/:id', component:DeleteUserComponent },
{ path: '**', component:ErrorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
