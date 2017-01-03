import { Component, OnInit } from '@angular/core';
import { AccInfo } from './acc-info-form';

import { GetAccountInfoService } from './get-account-info.service';
 
@Component({
  selector: 'acc-info-form',
  templateUrl: './acc-info-form.component.html',
  styleUrls: ['./acc-info-form.component.css'],
  providers:[GetAccountInfoService]
})
export class AccInfoFormComponent implements OnInit {

  private formVal:any;

  constructor(private accInfoService :GetAccountInfoService) {  

  }

  ngOnInit() {
  }

  model = new AccInfo(18, '', '', '', '');
  submitted = false;
  onSubmit() { this.submitted = true; }
  newAccInfo() {
    this.model = new AccInfo(42, '', '', '', '');
  }

  // getFormVal(formVal){
   
  //   var data = formVal.form.value;
  //    console.log(data,"formVal data");

  //   this.accInfoService.getAccountInfo(JSON.stringify(data))
  //     .subscribe(
  //       () => console.log('Success!!!'),
  //       error =>  console.error('Error!!')
  //   ); 
  // }

  getFormVal(){
   
    var data = {
      "name":"test"
    };
     console.log(data,"formVal data");

    this.accInfoService.getAccountInfo(JSON.stringify(data))
      .subscribe(
        () => console.log('Success!!!'),
        error =>  console.error('Error!!')
    ); 
  }



}
