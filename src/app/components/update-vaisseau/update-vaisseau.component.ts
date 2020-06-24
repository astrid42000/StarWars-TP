import { Component, OnInit } from '@angular/core';
import {Vaisseau} from "../../models/vaisseau";
import {ActivatedRoute, Router} from "@angular/router";
import {VaisseauService} from "../../services/vaisseau.service";

@Component({
  selector: 'app-update-vaisseau',
  templateUrl: './update-vaisseau.component.html',
  styleUrls: ['./update-vaisseau.component.css']
})
export class UpdateVaisseauComponent implements OnInit {
  vaisseauUpdate: Vaisseau;
  constructor(private activatedRoute: ActivatedRoute,private vaisseauService: VaisseauService, private router: Router) { }


  ngOnInit(): void {
    let id = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log (id);
    this.vaisseauUpdate= this.vaisseauService.retourneUn(id);
  }
update(){
    this.vaisseauService.edition(this.vaisseauUpdate);
    this.router.navigate(['vaisseaux']);
}
}
