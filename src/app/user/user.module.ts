import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, AddUserComponent],
  exports:[UserComponent]
})
export class UserModule { }
