import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  paginarouter=null;

  constructor(public navCtrl: NavController) {
    
  }

    doOpen(url)
    {
    	$paginarouter=window.open(url, '', 'width=330,height=252,scrollbars=NO,statusbar=NO,left=500,top=250');
    }

}
