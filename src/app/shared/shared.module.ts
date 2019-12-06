import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const THIRD_MODULE = [
    MaterialModule,
    FlexLayoutModule
];

@NgModule({
    imports: [ CommonModule, FormsModule, RouterModule, ReactiveFormsModule, ...THIRD_MODULE ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        ...THIRD_MODULE
    ]
})
export class SharedModule {

}
