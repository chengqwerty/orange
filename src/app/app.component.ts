import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'orange';

    constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {

    }

    ngOnInit(): void {
        Object.keys(ICONS).forEach(key => {
            ICONS[key].forEach(icon => {
                this.iconRegistry.addSvgIcon(icon.name, this.sanitizer.bypassSecurityTrustResourceUrl(icon.path));
            });
        });
    }

}
