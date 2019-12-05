import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './passport/login/user-login.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'passport',
                children: [
                    {
                        path: 'login',
                        component: UserLoginComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
