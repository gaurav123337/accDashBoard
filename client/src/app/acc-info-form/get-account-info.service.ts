import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class GetAccountInfoService {

  endpoint_url:String = "http://localhost:4300/customers/add";

  constructor(private http: Http) { }

  getAccountInfo(data):Observable<any>{
    //console.log(formVal.form.value,"Account Info");//http://localhost:4300/customers/add
    const body = JSON.stringify(data);   
    console.log(body,"body");
    const headers = new Headers({'Content-Type':  'application/json'});  

    return this.http.post('http://localhost:4300/customers/add',body, {headers:headers});       
  }  

}
