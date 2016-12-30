import { Component, OnInit } from '@angular/core';
import { AccInfo } from './acc-info-form';

@Component({
  selector: 'acc-info-form',
  templateUrl: './acc-info-form.component.html',
  styleUrls: ['./acc-info-form.component.css']
})
export class AccInfoFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model = new AccInfo(18, '', '', '', '');
  submitted = false;
  onSubmit() { this.submitted = true; }
  newAccInfo() {
    this.model = new AccInfo(42, '', '', '', '');
  }

}
