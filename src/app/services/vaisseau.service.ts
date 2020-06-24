import { Injectable } from '@angular/core';
import {Vaisseau} from "../models/vaisseau";

@Injectable({
  providedIn: 'root'
})
export class VaisseauService {
vaisseaux=[
  new Vaisseau(1,'Faucon Millenium','XXXXXXXX',true,8,'faucon.jpg'),
  new Vaisseau(2, 'Xwing', 'AAAAAAAAAA', false, 2,'xwing.jpg'),
  new Vaisseau(3, 'Airspeeder', 'HHHHHHHHH', false,1,'airspeeder.png')
]
  constructor() { }

  retourneVaisseaux():Vaisseau[]{
  return this.vaisseaux;
  }
  retourneUn(id:number): Vaisseau{
  return this.vaisseaux.filter(fn=>fn.id==id)[0];
  }

  ajoutVaisseau(newVaisseau: Vaisseau):void{
  this.vaisseaux.push(newVaisseau);
  }

  delete(monVaisseau:Vaisseau): Vaisseau[]{
  this.vaisseaux= this.vaisseaux.filter(vaisseau=>monVaisseau!==vaisseau);
  return this.vaisseaux;
  }

  edition (vaisseau: Vaisseau){
  this.vaisseaux.filter(mesVaisseaux=>vaisseau!==mesVaisseaux)[0]=vaisseau;
  return this.vaisseaux;
  }
}
