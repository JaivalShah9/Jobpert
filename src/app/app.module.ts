import { LogInComponent } from './log-in/log-in.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MessagesModule } from 'primeng/messages';
import {TableModule} from 'primeng/table';
import {MessageModule} from 'primeng/message';
import {FileUploadModule} from 'primeng/fileupload';
import {ToastModule} from 'primeng/toast';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import { AppComponent } from './app.component';
import { JobportalComponent } from './jobportal/jobportal.component';
import { CommonModule } from '@angular/common';
import {AnimateModule} from 'primeng/animate';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { animate } from '@angular/animations';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {CalendarModule} from 'primeng/calendar';
import { LandingComponent } from './landing/landing.component';
import { FlexLayoutModule } from "@angular/flex-layout";



/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Angular Material */

import { AngularMaterialModule } from './angular-material.module';
import { Table3Component } from './table3/table3.component';

/* FormsModule */

/* Angular Flex Layout */




@NgModule({
  declarations: [
    AppComponent,
    JobportalComponent,
    LandingComponent,
    LogInComponent,
    Table3Component

  
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectCountryModule.forRoot('de'),
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    AnimateModule,
    InputNumberModule,
    InputMaskModule,
    CalendarModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule,
    FlexLayoutModule,
    MessagesModule,
    TableModule,
    MessageModule,
    FileUploadModule,
    ToastModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
      
    })
    // AppRoutingModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
  export function httpTranslateLoader(http:HttpClient) {

    return new TranslateHttpLoader(http);
  }

