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
  isLoading:boolean;
  constructor(private Route: ActivatedRoute,private vaisseauService: VaisseauService, private router: Router) { }


  ngOnInit(): void {
    this.isLoading=true;
    this.vaisseauService.retourneUn(+this.Route.snapshot.paramMap.get('id')).subscribe((data:Vaisseau)=>{
      this.vaisseauUpdate=data,this.isLoading=false;
    });
  }
update(){
    this.isLoading=true;
    this.vaisseauService.edition(this.vaisseauUpdate).subscribe(then=>(this.isLoading=false,this.router.navigate(['vaisseaux'])))

}
}
