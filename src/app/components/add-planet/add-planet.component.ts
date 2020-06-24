import { Component, OnInit } from '@angular/core';
import {Vaisseau} from "../../models/vaisseau";
import {Planete} from "../../models/planete";
import {VaisseauService} from "../../services/vaisseau.service";
import{Router} from "@angular/router";
import {PlaneteService} from "../../services/planete.service";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.css']
})
export class AddPlanetComponent implements OnInit {
newPlanete= new Planete();
  constructor(private planeteService:PlaneteService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {}
  voir(): void{
    this.planeteService.ajoutPlanete(this.newPlanete);
    this.router.navigate( ['/planets']);
    this.toastr.success('vous avez bien ajouté votre planete!', 'Succès !', {positionClass: 'toast-top-center'});
  }


  }


