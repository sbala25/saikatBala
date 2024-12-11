import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';
import { UtilsService } from '../service/utils/utils.service';
import { inject } from '@angular/core';
import { AppDataService } from '../service/appData/app-data.service';


let service_count: number = 0;
export const loadingInterceptorInterceptor: HttpInterceptorFn = (req, next, _appData = inject(AppDataService)) => {
  service_count++;
  _appData.isLoaderApi.next(true);

  return next(req).pipe(finalize(() => {
    service_count--;
    if (service_count === 0) {
      _appData.isLoaderApi.next(false);
    }
  }));
};
