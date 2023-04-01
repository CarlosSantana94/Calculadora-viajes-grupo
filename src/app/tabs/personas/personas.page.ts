import {Component, inject, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {collection, collectionData, Firestore} from "@angular/fire/firestore";
import {Gasto, Persona} from "../../interfaces/interfaces";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.page.html',
  styleUrls: ['./personas.page.scss'],
})
export class PersonasPage implements OnInit {
  firestore: Firestore = inject(Firestore);
  personas$: Persona[] | undefined;


  constructor() {
    const colleccionPersonas = collection(this.firestore, '/Grupos/a1b2c3d4/Personas')

    const collectionDataPersona = collectionData(colleccionPersonas, {idField: 'id'}) as Observable<Persona[]>;

    collectionDataPersona.subscribe(d => {
      console.log(d)
      d.forEach(persona => {

        const collecionGastos = collection(this.firestore, '/Grupos/a1b2c3d4/Personas/' + persona.id + '/Gastos');
        const gasto = collectionData(collecionGastos, {idField: 'id'}) as Observable<Gasto[]>;

        gasto.subscribe(g => {
          persona.total = 0;
          g.forEach(gastoN => {

            persona.total += gastoN.valor
          })
        })

      })
      this.personas$ = d;
    })

  }

  ngOnInit() {
  }

}
