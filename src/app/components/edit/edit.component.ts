import { Component, OnInit } from '@angular/core';
import {Planete} from "../../models/planete";
import {ActivatedRoute, Router} from "@angular/router";
import {PlaneteService} from "../../services/planete.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
modifplanete: Planete;
isLoading:boolean;

  constructor(private route: ActivatedRoute, private planeteService: PlaneteService, private router:Router) { }

  ngOnInit(): void{
 this.planeteService.retourneUne(+ this.route.snapshot.paramMap.get('id')).subscribe((data: Planete)=>{this.modifplanete=data});
  }

  update() {
    this.isLoading=true;
    this.planeteService.edition(this.modifplanete).subscribe(then=>{this.isLoading=false,this.router.navigate(['/planets'])}
    );

  }
}
