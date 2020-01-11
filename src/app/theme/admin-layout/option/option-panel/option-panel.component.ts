import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SettingService } from '../../../../core/service/setting.service';

interface Theme {
    name: string;
    background: string;
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

    public icon = 'apple-fill';
    public themes: Theme[] = [
        { name: 'black', background: '#000' },
        { name: 'red', background: '#ff1919' },
        { name: 'blue', background: '#2735f5' }
    ];

    constructor(private setting: SettingService) {

    }

    ngOnInit() {
    }

    changeTheme(item: any) {
        this.themes.forEach(theme => {
            theme.icon = '';
        });
        item.icon = this.icon;
        this.setting.sendOptionSubscribe(item.name);
    }

}
