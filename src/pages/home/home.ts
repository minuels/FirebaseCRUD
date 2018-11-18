import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { AddPersonPage} from '../add-person/add-person';

import { AngularFireDatabase } from '@angular/fire/database';
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  arrData = []
  myInput

  constructor(
    public navCtrl: NavController, 
    private afDB: AngularFireDatabase, 
    private actionSheetCtrl: ActionSheetController) {
    this.afDB.list("/myItems/").valueChanges().subscribe( _data => {
      this.arrData = _data;
      //console.log(this.arrData);
    });
  }

  navigateToAddPersonPage() {
    this.navCtrl.push(AddPersonPage);
  }

  btnAddPerson() {
    this.afDB.list("/myItems/").push(this.myInput);
  }

  selectPerson(i) {
    this.actionSheetCtrl.create({
      title: '${person}',
      buttons: [{
        text: "Edit",
        handler: () => {

        },
      },
      {
        text: "Delete",
        role: "destructive",
        handler: () => {
          this.afDB.list("/myItems/").remove(this.arrData[i].$key)//add $key
        }
      },
      {
        text: "Cancel",
        role: "Cancel",
        handler: () => {
          console.log("The user has selected the cancel button");
        }
      }]
    }).present();
  }

}
