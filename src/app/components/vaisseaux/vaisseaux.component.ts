import { Component, OnInit } from '@angular/core';
import {Vaisseau} from "../../models/vaisseau";
import {VaisseauService} from "../../services/vaisseau.service";

@Component({
  selector: 'app-vaisseaux',
  templateUrl: './vaisseaux.component.html',
  styleUrls: ['./vaisseaux.component.css']
})
export class VaisseauxComponent implements OnInit {
myVaisseaux:Vaisseau[];
  constructor(private vaisseauService: VaisseauService) { }

  ngOnInit(): void {
    this.myVaisseaux=this.vaisseauService.retourneVaisseaux();
  }
  supprime(vaisseau:Vaisseau) {
    this.myVaisseaux= this.vaisseauService.delete(vaisseau);
  }
}
