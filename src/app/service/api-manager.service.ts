import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

  // private baseURL="https://saikatbalaapi.onrender.com/api/";
  private baseURL="http://localhost:8080/api/";

  constructor(private _http:HttpClient) { }

  getRequest(path:string):Observable<any>{
    return this._http.get(this.baseURL+path);
  }
  postRequest(path:any, data:any):Observable<any>{
    return this._http.post(this.baseURL+path, data);
  }
  putRequest(path:any, data:any):Observable<any>{
    return this._http.put(this.baseURL+path, data);
  }
  deleteRequest(path:any, params:any):Observable<any>{
    return this._http.delete(this.baseURL+path, {params: params});
  }
}
