import {Component, inject, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {collection, collectionData, Firestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.page.html',
  styleUrls: ['./personas.page.scss'],
})
export class PersonasPage implements OnInit {
  firestore: Firestore = inject(Firestore);
  personas$: Observable<any[]>;


  constructor() {
    const aCollection = collection(this.firestore, '/Grupos/a1b2c3d4/Personas')
    this.personas$ = collectionData(aCollection);

    console.log(this.personas$)
  }

  ngOnInit() {
  }

}
