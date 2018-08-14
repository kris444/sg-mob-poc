import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { HomePage } from "../home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user =  {
    name: "",
    password:""
  };
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

  logForm() {
    let loader = this.loadingCtrl.create({
      content: "Loading...",
      duration: 300
    });
    loader.present();
    console.log(this.user);
    this.navCtrl.push(HomePage, {
      user: this.user,
    })
  }
}
