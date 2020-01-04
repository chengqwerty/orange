import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './passport/login/user-login.component';
import { AuthLayoutComponent } from '../theme/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from '../theme/admin-layout/admin-layout.component';

const routes: Routes = [
    {
        path: 'passport',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'login',
                component: UserLoginComponent
            }
        ]
    },
    {
        path: 'app',
        component: AdminLayoutComponent,
        children: [
            // {
            //     path: '',
            //     redirectTo: 'index',
            //     pathMatch: 'full'
            // }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
