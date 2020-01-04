import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_CONFIG } from '../../../../environments/environment';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

    public reactiveForm: FormGroup;
    public message: string;

    constructor(private fb: FormBuilder,
                private http: HttpClient,
                private router: Router,
                public snackBar: MatSnackBar) {
        this.reactiveForm = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    get username() {
        return this.reactiveForm.get('username').value;
    }
    get password() {
        return this.reactiveForm.get('password').value;
    }

    ngOnInit() {
    }

    login() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        };
        const params = new URLSearchParams();
        params.append('username', this.username);
        params.append('password', this.password);
        this.http.post(URL_CONFIG.sys_url + 'login', params.toString(), httpOptions)
            .subscribe((response: any) => {
                if (response.code === 0) {
                    this.message = '登录成功！';
                    this.snackBar.open(this.message, null, {duration: 500, horizontalPosition: 'center', verticalPosition: 'top'});
                    this.router.navigate(['/app']);
                } else {
                    this.message = '登录失败，可能是用户名和密码不对，请检查！';
                    this.snackBar.open(this.message, null, {duration: 500, horizontalPosition: 'center', verticalPosition: 'top'});
                }
            }, (error: any) => {
                this.message = '登录失败，可能是用户名和密码不对，请检查！';
            });
    }
}
