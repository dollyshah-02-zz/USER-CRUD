import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AppRoutingModule } from '../app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import{ FormsModule } from '@angular/forms'
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [UserComponent, AddUserComponent, PagenotfoundComponent],
  exports: [UserComponent]
})
export class UserModule { }
