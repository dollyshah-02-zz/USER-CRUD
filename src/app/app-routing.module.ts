import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UserComponent } from './user/user/user.component';
import { PagenotfoundComponent } from './user/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recordlist', pathMatch: 'full'
  },
  {
    path: 'recordlist',
    component: UserComponent
  },
  {
    path: 'recordlist/:id',
    component: AddUserComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
