import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Menu {
    name: string;
    description?: string;
    target?: string;
    icon?: string;
    link?: string;
    type?: 'group' | 'menu';
    opened?: boolean;
    children?: Menu[];
}

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    private menuSub = new BehaviorSubject<boolean>(true);

    private menus: Menu[] = [
        {
            name: '控制面板',
            icon: 'QQ',
            children: [
                {
                    name: '颜色',
                    icon: 'QQ',
                    type: 'group',
                    children: [
                        {
                            name: '主题颜色',
                            icon: 'QQ',
                            link: 'config/color'
                        }
                    ]
                },

            ]
        }
    ];

    getMenus(): Menu[] {
        return this.menus;
    }

    setMenus(menus: Menu[]) {
        this.menus = menus;
        this.menuSub.next(true);
    }
}
