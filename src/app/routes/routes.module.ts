import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { UserLoginComponent } from './passport/login/user-login.component';


@NgModule({
    declarations: [ UserLoginComponent ],
    imports: [
        CommonModule,
        RoutesRoutingModule
    ]
})
export class RoutesModule { }
