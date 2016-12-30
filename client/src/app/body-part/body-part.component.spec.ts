/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BodyPartComponent } from './body-part.component';

describe('BodyPartComponent', () => {
  let component: BodyPartComponent;
  let fixture: ComponentFixture<BodyPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
