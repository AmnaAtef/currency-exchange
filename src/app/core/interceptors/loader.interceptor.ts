import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  loader_count: number = 0;

  constructor(public loaderService: LoaderService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //  if(!req.url.includes('/Login')){
    this.loaderService.show();
    this.loader_count++;
    // }

    return next.handle(req).pipe(
      finalize(() => {
        this.loader_count--;
        if (this.loader_count == 0) {
          this.loaderService.hide();
        }
      })
    );
  }
}
