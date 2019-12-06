import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

    public reactiveForm: FormGroup;

    constructor(private fb: FormBuilder,
                private router: Router) {
        this.reactiveForm = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    ngOnInit() {
    }

}
