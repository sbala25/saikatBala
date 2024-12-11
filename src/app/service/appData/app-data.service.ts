import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor() { }

  isLoaderApi = new BehaviorSubject<boolean>(false);
  isAdmin = new BehaviorSubject<boolean>(false);
}
