import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        AdminLayoutComponent
    ],
    imports: [
        SharedModule
    ]
})
export class ThemeModule {

}
