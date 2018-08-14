import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { DetailPage } from "../detail/detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: string = "none";
  constructor(public navParams: NavParams, public navCtrl: NavController, public loadingCtrl: LoadingController) {
    this.user = this.navParams.get('user');
  }

  onHcomClicked() {
    let loader = this.loadingCtrl.create({
      content: "Loading...",
      duration: 300
    });
    loader.present();
    this.navCtrl.push(DetailPage, {
      filter: "hcom",
    })
  }
}
