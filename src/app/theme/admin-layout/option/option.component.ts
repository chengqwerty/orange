import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-option',
    templateUrl: './option.component.html',
    styleUrls: ['./option.component.scss'],
    animations: [
        trigger('panel-enter-leave', [
            transition(':enter', [
                style({ right: '-320px' }),
                animate('1s', style({ right: 0 }))
            ]),
            transition(':leave', [
                style({ right: 0 }),
                animate('1s', style({ right: '-320px' }))
            ]),
        ])
    ]
})
export class OptionComponent implements OnInit {

    public opened = false;
    private dragging = false;

    constructor() { }

    ngOnInit() {
    }

    handleDragStart($event) {
        this.dragging = true;
    }

    reverse() {
        if (this.dragging) {
            this.dragging = false;
            return;
        }
        this.opened = !this.opened;
    }

}
