import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

const ICONS = [
    { name: 'alipay-circle-fill', path: 'assets/icon/brand/alipay-circle-fill.svg' },
    { name: 'aliwangwang-fill', path: 'assets/icon/brand/aliwangwang-fill.svg' },
    { name: 'amazon-circle-fill', path: 'assets/icon/brand/amazon-circle-fill' },
    { name: 'android-fill', path: 'assets/icon/brand/android-fill.svg' },
    { name: 'apple-fill', path: 'assets/icon/brand/apple-fill.svg' },
    { name: 'behance-circle-fill', path: 'assets/icon/brand/behance-circle-fill.svg' },
    { name: 'chrome-fill', path: 'assets/icon/brand/chrome-fill.svg' },
    { name: 'dingtalk', path: 'assets/icon/brand/dingtalk.svg' },
    { name: 'dropbox', path: 'assets/icon/brand/dropbox.svg' },
    { name: 'Gitlab-fill', path: 'assets/icon/brand/Gitlab-fill.svg' },
    { name: 'HTML-fill', path: 'assets/icon/brand/HTML-fill.svg' },
    { name: 'QQ', path: 'assets/icon/brand/QQ.svg' },
    { name: 'skype-fill', path: 'assets/icon/brand/skype-fill.svg' },
    { name: 'twitter', path: 'assets/icon/brand/twitter.svg' },
    { name: 'wechat-fill', path: 'assets/icon/brand/wechat-fill.svg' },
    { name: 'weibo', path: 'assets/icon/brand/weibo.svg' },
    { name: 'windows-fill', path: 'assets/icon/brand/windows-fill.svg' },
    { name: 'yahoo-fill', path: 'assets/icon/brand/yahoo-fill.svg' },
    { name: 'Youtube-fill', path: 'assets/icon/brand/Youtube-fill.svg' },
    { name: 'yuque-fill', path: 'assets/icon/brand/yuque-fill.svg' },
];

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
        ICONS.forEach(icon => {
            this.iconRegistry.addSvgIcon(icon.name, this.sanitizer.bypassSecurityTrustResourceUrl(icon.path));
        });
    }

}
