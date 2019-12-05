import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCheckboxModule, MatDialogModule } from '@angular/material';
import { RoutesModule } from './routes/routes.module';
import { StartupService } from './core/service/startup.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DefaultInterceptor } from './core/interceptors/default.interceptor';

export function StartupServiceFactory(startupService: StartupService) {
    return () => startupService.load();
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        MatCheckboxModule,
        MatDialogModule,
        RoutesModule,
        AppRoutingModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
        StartupService,
        {
            provide: APP_INITIALIZER,
            useFactory: StartupServiceFactory,
            deps: [StartupService],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
