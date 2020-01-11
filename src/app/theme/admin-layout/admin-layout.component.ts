import { Component, HostBinding, OnInit } from '@angular/core';
import { SettingService } from '../../core/service/setting.service';
import { AppSettings } from '../../core/setting';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

    public option: AppSettings;
    public layout: any;
    public unsubscribe$;

    constructor(private setting: SettingService) {
        this.option = this.setting.getOptions();
    }

    ngOnInit() {
        this.layout = {
            'art-header-above': this.option.headerPos === 'above',
            'art-header-fixed': this.option.headerPos === 'fixed',
        };
        this.unsubscribe$ = this.setting.getOptionSubscribe().subscribe(item => {
            this.changeTheme();
        });
    }

    changeTheme() {
        document.getElementById('app-container').classList.add('black');
    }

    // @HostBinding('class.theme-dark') get themeDark() {
    //     return this.options.theme === 'dark';
    // }

}
