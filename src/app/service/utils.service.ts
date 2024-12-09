import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  isLoaderApi = new BehaviorSubject<boolean>(false);
  isAdmin = new BehaviorSubject<boolean>(false)
}