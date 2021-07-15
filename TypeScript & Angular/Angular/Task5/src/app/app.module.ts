import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/users.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { ErrorComponent } from './Components/error/error.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CustomDirective } from './Directives/custom.directive';
import { CustomPipe } from './Pipes/custom.pipe';
const routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: '**', component: ErrorComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    ErrorComponent,
    CustomDirective,
    CustomPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
