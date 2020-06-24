import { Component, OnInit } from '@angular/core';
import {Planete} from "../../models/planete";
import {PlaneteService} from "../../services/planete.service";


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
myPlanetes: Planete[];
  constructor(private planeteService: PlaneteService) { }

  ngOnInit(): void {
    this.myPlanetes= this.planeteService.retournePlanetes() ;
  }
 deletePlanete(planete:Planete){
this.myPlanetes=this.planeteService.supprimer(planete);
 }


}
