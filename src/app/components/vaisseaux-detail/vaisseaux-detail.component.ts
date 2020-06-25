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
isLoading:boolean;
  constructor(private route:ActivatedRoute, private vaisseauService:VaisseauService) { }

  ngOnInit(): void {
this.isLoading=true;
this.vaisseauService.retourneUn(+this.route.snapshot.paramMap.get('id')).subscribe((data:Vaisseau)=>{
  this.vaisseau=data; this.isLoading=false;
})
  }

}
