import { Injectable } from '@angular/core';
import {Planete} from "../models/planete";

@Injectable({
  providedIn: 'root'
})
export class PlaneteService {
planets=[
  new Planete(1, 'Tatooine', 1000, 'resistance', 200000000, 'Tatooine.jpg'),
  new Planete(2,'Coruscant',300000,'empire',4509879000, 'coruscant.jpg'),
  new Planete(3,'Kashyyyk', 40000,'resistance', 39000000000,'kasy.jpg')
];
  constructor() { }

  retournePlanetes(): Planete[]{
    return this.planets;
  }

  retourneUne(id:number): Planete{
    return this.planets.filter(fn=>fn.id==id)[0];
  }

  ajoutPlanete(newPlanete: Planete):void{
    this.planets.push(newPlanete);
  }

  supprimer(planete:Planete):Planete[]{
    this.planets= this.planets.filter(suppPlanete=>planete!==suppPlanete)
    return this.planets;
  }

  edition(planete:Planete){
    this.planets.filter(planet=>planete!==planet)[0]=planete;
    return this.planets;

  }
}
