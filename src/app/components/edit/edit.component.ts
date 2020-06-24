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

  constructor(private route: ActivatedRoute, private planeteService: PlaneteService, private router:Router) { }

  ngOnInit(): void{
 let id=+this.route.snapshot.paramMap.get('id');
this.modifplanete= this.planeteService.retourneUne(id)
  }

  update() {
    this.planeteService.edition(this.modifplanete);
    this.router.navigate(['/planets']);

  }
}
