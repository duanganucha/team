import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  item;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.item = navParams.get('item')
    console.log(this.item.locationDetail)
  }

  ionViewDidLoad() {
    this.presentToast();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: `สถานที่เกิดเหตุ : ${this.item.locationDetail}`,
      showCloseButton: true,
      closeButtonText: 'ปิด'
      });
    toast.present();
  }

}
