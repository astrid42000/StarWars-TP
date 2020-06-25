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
isLoading:boolean
  constructor(private vaisseauService: VaisseauService) { }

  ngOnInit(): void {
    this.vaisseauService.retourneVaisseaux().subscribe((data:Vaisseau[])=>{this.myVaisseaux=data;});
  }
  supprime(id:number):void{
    this.isLoading=true;
    this.vaisseauService.delete(id).subscribe(then=> {
      this.vaisseauService.retourneVaisseaux().subscribe(
        (newdata: Vaisseau[]) => {
          this.myVaisseaux = newdata, this.isLoading = false;
        });
    })
}}


