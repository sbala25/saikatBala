import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';
import { UtilsService } from '../service/utils.service';
import { inject } from '@angular/core';


let service_count: number = 0;
export const loadingInterceptorInterceptor: HttpInterceptorFn = (req, next, _utilsService = inject(UtilsService)) => {
  service_count++;
  _utilsService.isLoaderApi.next(true);

  return next(req).pipe(finalize(() => {
    service_count--;
    if (service_count === 0) {
      _utilsService.isLoaderApi.next(false);
    }
  }));
};
