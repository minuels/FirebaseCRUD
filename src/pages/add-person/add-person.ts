import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Person } from "../../moduls/person/Person.Interface";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
//import { Observable } from "rxjs/Observable";
/**
 * Generated class for the AddPersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-person',
  templateUrl: 'add-person.html',
})
export class AddPersonPage {

  person = {} as Person;
  personList: AngularFireList<Person> //ojo son 2 puntos no igual
  //personList sera Person[]?

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private afDB: AngularFireDatabase) {
    this.personList = this.afDB.list('person-list');
  }

  addPerson(person: Person) {
    this.personList.push({
      firstName: this.person.firstName,
      lastName: this.person.lastName,
      age: Number(this.person.age)
    });
  }


}
