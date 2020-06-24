import { Component, OnInit } from '@angular/core';
import {Vaisseau} from "../../models/vaisseau";
import {VaisseauService} from "../../services/vaisseau.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-vaisseau',
  templateUrl: './add-vaisseau.component.html',
  styleUrls: ['./add-vaisseau.component.css']
})
export class AddVaisseauComponent implements OnInit {
  newVaisseau= new Vaisseau();
  constructor(private vaisseauService: VaisseauService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  voir(): void{
    this.vaisseauService.ajoutVaisseau(this.newVaisseau);
    this.router.navigate(['/vaisseaux']);
    this.toastr.success('vous avez bien ajouté votre vaisseau!', 'Succès !', {positionClass: 'toast-top-center'});
}}
