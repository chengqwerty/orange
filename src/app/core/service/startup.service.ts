import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_CONFIG } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable()
export class StartupService {

    constructor(private httpClient: HttpClient) { }

    load(): Promise<any> {
        return new Promise<any>((resolve => {
            this.httpClient.get(URL_CONFIG.sys_url + 'system/user/getUserLogin')
                .pipe(
                    catchError(response => {
                        resolve();
                        return response;
                    })
                )
                .subscribe((response: any) => {

                }, () => { }, () => { resolve(); });
        }));

    }

}
