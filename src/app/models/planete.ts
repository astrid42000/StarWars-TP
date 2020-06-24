export class Planete {
  id:number;
  nom:string;
  nbrHabitant: number;
  allegeance: string;
  nbrKmTerre: number;
  img: string;


  constructor(id: number=0, nom: string= null, nbrHabitant: number=0, allegeance: string= null, nbrKmTerre: number=0,img:string=null) {
    this.id = id;
    this.nom = nom;
    this.nbrHabitant = nbrHabitant;
    this.allegeance = allegeance;
    this.nbrKmTerre = nbrKmTerre;
    this.img= img;
  }

}
