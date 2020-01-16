import { Injectable } from '@angular/core';
import { AppSettings, defaults } from '../setting';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SettingService {
    private options = defaults;
    private optionSubject = new Subject<boolean>();

    getOptions(): AppSettings {
        return this.options;
    }

    setOptions(option) {
        Object.assign(this.options, option);
    }

    getOptionSubscribe() {
        return this.optionSubject;
    }

    sendOptionSubscribe(bool: boolean) {
        this.optionSubject.next(bool);
    }

}
