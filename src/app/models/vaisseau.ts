export class Vaisseau {
  id: number;
  nom: string;
  modele:string;
  lightSpeed:boolean;
  nbrPassagers:number;
  img:string;


  constructor(id: number=0, nom: string= null, modele: string= null, lightSpeed: boolean= null, nbrPassagers: number=0, img:string=null) {
    this.id = id;
    this.nom = nom;
    this.modele = modele;
    this.lightSpeed = lightSpeed;
    this.nbrPassagers = nbrPassagers;
    this.img = img;
  }
}
