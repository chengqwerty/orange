import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

    public option = {
        header: {
            position: 'above',
        }
    };
    public layout = { };

    constructor() { }

    ngOnInit() {
        this.layout = {
            'art-header-above': this.option.header.position === 'above',
            'art-header-fixed': this.option.header.position === 'fixed',
        };
    }

}
