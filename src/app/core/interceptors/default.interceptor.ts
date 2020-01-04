import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponseBase } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) { }

    private goTo(url: string) {
        setTimeout(() => this.injector.get(Router).navigateByUrl(url));
    }

    private handleData(event: HttpResponseBase): Observable<any> {
        switch (event.status) {
            case 200:
                // 业务层级错误处理，以下是假定restful有一套统一输出格式（指不管成功与否都有相应的数据格式）情况下进行处理
                // 例如响应内容：
                //  错误内容：{ status: 1, msg: '非法参数' }
                //  正确内容：{ status: 0, response: {  } }
                // 则以下代码片断可直接适用
                // if (event instanceof HttpResponse) {
                //     const body: any = event.body;
                //     if (body && body.status !== 0) {
                //         this.msg.error(body.msg);
                //         // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
                //         // this.http.get('/').subscribe() 并不会触发
                //         return throwError({});
                //     } else {
                //         // 重新修改 `body` 内容为 `response` 内容，对于绝大多数场景已经无须再关心业务状态码
                //         return of(new HttpResponse(Object.assign(event, { body: body.response })));
                //         // 或者依然保持完整的格式
                //         return of(event);
                //     }
                // }
                break;
            case 401:
                // this.notification.error(`未登录或登录已过期，请重新登录。`, ``);
                // this.goTo('/passport/login');
                this.goTo('/app');
                break;
            case 403:
            case 404:
            case 500:
                this.goTo(`/exception/${event.status}`);
                break;
            default:
                if (event instanceof HttpErrorResponse) {
                    console.warn('未可知错误，大部分是由于后端不支持CORS或无效配置引起', event);
                    return throwError(event);
                }
                break;
        }
        return of(event);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            mergeMap((event: any) => {
                if (event instanceof HttpResponseBase) { return this.handleData(event); }
                // 若一切都正常，则后续操作
                return of(event);
            }),
            catchError((err: HttpErrorResponse) => this.handleData(err))
        );
    }

}
