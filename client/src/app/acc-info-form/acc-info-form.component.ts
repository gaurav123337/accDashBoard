import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
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
  private accInfoList:any;
  private lists = [];

  constructor(private accInfoService :GetAccountInfoService) {  

  }

  ngOnInit() {     

    //Get customer list  
    this.getList();
  }

  model = new AccInfo(18, '', '', '', '');
  submitted = false;
  onSubmit() { this.submitted = true; }
  newAccInfo() {
    this.model = new AccInfo(42, '', '', '', '');
  }


   addCustomer(formVal) {
    this.accInfoService.addCustomer(formVal.value).subscribe(
      res => {
        var newCustomer = res.json();
        this.lists.push(newCustomer);
        //this.addCustomerForm.reset();
        //this.toast.setMessage("item added successfully.", "success");
      },
      error => console.log(error)
    );
  }


  getList() {
    this.accInfoService.getLists().subscribe(
      data => {
         console.log(data.json());
          this.accInfoList = JSON.stringify(data.json());
      }
      //this.lists = data,
      // error => console.log(error),
      // () => this.isLoading = false
    );
  }



}
