import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';
import { CallNumber } from '@ionic-native/call-number';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  item;
  constructor(
    private callNumber: CallNumber,
    public navCtrl: NavController, 
    public navParams: NavParams) {
     this.item = this.navParams.get('item');
      console.log(this.item)
  }

  openMap(){
    console.log(this.item)
    this.navCtrl.push(MapPage,{ item : this.item });
  }


  onCallPhone(){
    this.callNumber.callNumber(this.item.telNumber, true)
  }

}
