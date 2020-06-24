import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Vaisseau} from "../../models/vaisseau";
import {VaisseauService} from "../../services/vaisseau.service";

@Component({
  selector: 'app-vaisseaux-detail',
  templateUrl: './vaisseaux-detail.component.html',
  styleUrls: ['./vaisseaux-detail.component.css']
})
export class VaisseauxDetailComponent implements OnInit {
id:number;
vaisseau: Vaisseau;
  constructor(private route:ActivatedRoute, private vaisseauService:VaisseauService) { }

  ngOnInit(): void {
    this.id = +(this.route.snapshot.paramMap.get('id'));
    this.vaisseau= this.vaisseauService.retourneUn(this.id);
  }

}
