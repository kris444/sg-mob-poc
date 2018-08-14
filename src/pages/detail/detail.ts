import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  filter: string = "none";
  constructor(public navParams: NavParams, public navCtrl: NavController, public toastCtrl: ToastController) {
    this.filter = this.navParams.get('filter');
  }

  onAccept() {
    let toast = this.toastCtrl.create({
      message: 'Accept request processed',
      duration: 3000
    });
    toast.present();
  }

  onReject() {
    let toast = this.toastCtrl.create({
      message: 'Reject request processed',
      duration: 3000
    });
    toast.present();
  }
}