import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SharedModule } from '../shared/shared.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { HeaderComponent } from './admin-layout/header/header.component';
import { OptionComponent } from './admin-layout/option/option.component';
import { OptionNavigationComponent } from './admin-layout/option/option-navigation/option-navigation.component';
import { OptionPanelComponent } from './admin-layout/option/option-panel/option-panel.component';
import { SidenavMenuComponent } from './admin-layout/sidenav-menu/sidenav-menu.component';

@NgModule({
    declarations: [
        AdminLayoutComponent,
        AuthLayoutComponent,
        HeaderComponent,
        OptionComponent,
        OptionNavigationComponent,
        OptionPanelComponent,
        SidenavMenuComponent
    ],
    imports: [
        SharedModule
    ]
})
export class ThemeModule {

}
