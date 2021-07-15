import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserItemComponent } from './Components/user-item/user-item.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { UsersComponent } from './Components/users/users.component';
import { ErrorComponent } from './Components/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateUserComponent } from './Components/update-user/update-user.component';
import { DeleteUserComponent } from './Components/delete-user/delete-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserDetailsComponent,
    AddUserComponent,
    UsersComponent,
    ErrorComponent,
    UpdateUserComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
