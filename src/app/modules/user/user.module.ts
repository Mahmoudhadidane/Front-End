import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { CheckingsModule } from '../checking/checkings-module';
import { UserViewCheckingsComponent } from '../checking/user-view-checkings/user-view-checkings.component';
import { UserCreateCheckingComponent } from '../checking/user-create-checking/user-create-checking.component';
import { CreateCollectiveCheckingsComponent } from '../checking/create-collective-checkings/create-collective-checkings.component';

const userRoutes: Routes = [
  {
      path     : '',
      component: UserComponent,
      children: [
        {
          path: 'user-checkings',
          component:UserViewCheckingsComponent
        },
        {
          path:'create-checking',
          component:UserCreateCheckingComponent
        },
        {
          path:"create-collective-checkings",
          component:CreateCollectiveCheckingsComponent
        }
      ]
  }
];

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    RouterModule.forChild(userRoutes),
    CheckingsModule,  ]
})
export class UserModule { }
