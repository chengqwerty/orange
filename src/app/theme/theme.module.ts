import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SharedModule } from '../shared/shared.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MatSidenavModule } from '@angular/material';
import { HeaderComponent } from './admin-layout/header/header.component';

@NgModule({
    declarations: [
        AdminLayoutComponent,
        AuthLayoutComponent,
        HeaderComponent
    ],
    imports: [
        SharedModule,
        MatSidenavModule
    ]
})
export class ThemeModule {

}
