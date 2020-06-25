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
isLoading:boolean;
  constructor(private planeteService: PlaneteService) { }

  ngOnInit(): void {
    this.planeteService.retournePlanetes().subscribe((data:Planete[])=>{this.myPlanetes=data;});
  }
 deletePlanete(id:number):void{
this.isLoading=true;
this.planeteService.supprimer(id).subscribe(then=>{
                                                    this.planeteService.retournePlanetes().subscribe( (newdata:Planete[])=>{
                                                                                              this.myPlanetes=newdata;
                                                                                              this.isLoading=false;
                                                    })
})
 }


}
