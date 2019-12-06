import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { UserLoginComponent } from './passport/login/user-login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ UserLoginComponent ],
    imports: [
        CommonModule,
        SharedModule,
        RoutesRoutingModule
    ]
})
export class RoutesModule { }
