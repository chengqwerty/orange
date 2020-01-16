import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SettingService } from '../../../../core/service/setting.service';
import { AppSettings } from '../../../../core/setting';

interface Theme {
    name: string;
    background: string;
    className: string;
    icon?: string;
}

@Component({
    selector: 'app-option-panel',
    templateUrl: './option-panel.component.html',
    styleUrls: ['./option-panel.component.scss']
})
export class OptionPanelComponent implements OnInit {

    @Output()
    public optionsEvent = new EventEmitter<object>();

    private option: AppSettings;
    public icon = 'apple-fill';
    public themes: Theme[] = [
        { name: 'grey', background: '#607d8b', className: 'grey-app-theme' },
        { name: 'pink', background: '#e91e63', className: 'pink-app-theme' },
        { name: 'blue', background: '#3f51b5', className: 'blue-app-theme' }
    ];

    constructor(private setting: SettingService) {
        this.option = this.setting.getOptions();
    }

    ngOnInit() {
    }

    changeTheme(item: any) {
        this.themes.forEach(theme => {
            theme.icon = '';
        });
        item.icon = this.icon;
        this.option.theme = item.className;
        this.optionsChange();
    }

    optionsChange() {
        this.setting.sendOptionSubscribe(true);
    }

}
