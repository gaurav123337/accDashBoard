import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { BodyPartComponent } from './body-part/body-part.component';
import { Collapse } from './slid-effect.directive';
import { SlideComponent } from './slide/slide.component';
import { AccInfoFormComponent } from './acc-info-form/acc-info-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftPanelComponent,
    BodyPartComponent,
    Collapse,
    SlideComponent,
    AccInfoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
