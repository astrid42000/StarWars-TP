import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Planete} from "../../models/planete";
import {PlaneteService} from "../../services/planete.service";

@Component({
  selector: 'app-detail-planete',
  templateUrl: './detail-planete.component.html',
  styleUrls: ['./detail-planete.component.css']
})
export class DetailPlaneteComponent implements OnInit {
id: number;
planet: Planete;
  constructor(private route:ActivatedRoute, private planeteService:PlaneteService) { }

  ngOnInit(): void {
    this.planeteService.retourneUne(+this.route.snapshot.paramMap.get('id')).subscribe((data:Planete)=>{this.planet=data
    });

  }

}
