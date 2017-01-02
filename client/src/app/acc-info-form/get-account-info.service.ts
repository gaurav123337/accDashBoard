import { HttpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class GetAccountInfoService {

  endpoint_url:String = "http://localhost:4300/customers/add";

  constructor(private http: Http) { }

  getAccountInfo(formVal){
    console.log(formVal.form.value,"Account Info");//http://localhost:4300/customers/add
     return this.http.get(this.endpoint_url + formVal);
     
  }

}
