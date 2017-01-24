import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';



@Injectable()
export class GetAccountInfoService {

  endpoint_url:String = "http://localhost:4300/customers/add";

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getAccountInfo(data):Observable<any>{
    //console.log(formVal.form.value,"Account Info");//http://localhost:4300/customers/add
    const body = JSON.stringify(data);   
    console.log(body,"body");
    //const headers = new Headers({'Content-Type':  'application/json'});  
    const headers = new Headers({'Content-Type':  'application/json; charset=utf-8'});  

    return this.http.post('http://localhost:4300/customers/add',body, {headers:headers})
    .map((data:Response) => data.json());  

    //With fire base
    // return this.http.post('https://test-e987b.firebaseio.com/data.json',body, {headers:headers})
    // .map((data:Response) => data.json());     
  }  
   
  addCustomer(add): Observable<any> {
    console.log(add);
    //return this.http.post("/add", JSON.stringify(add), this.options);
    return this.http.post("/add", JSON.stringify(add), this.options);
  } 

  getLists(): Observable<any> {
    //return this.http.get('/list').map(res => res.json());
    //return this.http.get('/list').map(res => res);
    return this.http.get('/customers').map(res => res);
  }

  // addCustomer(cust): Observable<any> {
  //   return this.http.post("/cust", JSON.stringify(cust), this.options);
  // }

}
