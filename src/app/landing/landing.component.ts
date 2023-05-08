import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(public translate: TranslateService){
    translate.addLangs(['en','nl']);
    translate.setDefaultLang('en');
  }

  switchLang(lang: string){
    this.translate.use(lang);
  }
  

}
