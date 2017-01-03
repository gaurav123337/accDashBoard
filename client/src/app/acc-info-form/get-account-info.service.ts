import { HttpModule, Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';


@Injectable()
export class GetAccountInfoService {

  endpoint_url:String = "http://localhost:4300/customers/add";

  constructor(private http: Http) { }

  getAccountInfo(formVal):Observable<any>{
    console.log(formVal.form.value,"Account Info");//http://localhost:4300/customers/add
    const body = JSON.stringify(formVal.form.value);   
      const headers = new Headers({'Content-Type':  'application/json'});  

    return this.http.post('http://localhost:4300/customers/add',body, {headers:headers});       
  }

  
      

	}


}
