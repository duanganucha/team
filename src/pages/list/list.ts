import { DetailPage } from './../detail/detail';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    afDB: AngularFireDatabase,
    public loadingCtrl: LoadingController
  ) {

    const loader = this.loadingCtrl.create({
      content: 'กำลังโหลดข้อมูล...',
    });
    loader.present();

    this.itemsRef = afDB.list('test');

    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

    this.items.subscribe(snapshots => {
      loader.dismiss();
    },
      (err) => {
        console.warn(err);
      }
    )

    
  }

  onSceneView(item){
    console.log(item)
    this.navCtrl.push(DetailPage,{item})
  }

}
