import { NgModule } from '@angular/core';
import { MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
    exports: [
        MatCardModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class MaterialModule {

}
