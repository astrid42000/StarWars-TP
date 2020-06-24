import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from "./components/home/home.component";
import{PlanetsComponent} from "./components/planets/planets.component";
import{VaisseauxComponent} from "./components/vaisseaux/vaisseaux.component";
import{DetailPlaneteComponent} from "./components/detail-planete/detail-planete.component";
import{VaisseauxDetailComponent} from "./components/vaisseaux-detail/vaisseaux-detail.component";
import{AddPlanetComponent} from "./components/add-planet/add-planet.component";
import{AddVaisseauComponent} from "./components/add-vaisseau/add-vaisseau.component";
import {EditComponent} from "./components/edit/edit.component";
import {UpdateVaisseauComponent} from "./components/update-vaisseau/update-vaisseau.component";

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'planets', component: PlanetsComponent },
  {path:'addPlanet/add', component:AddPlanetComponent},
  {path:'vaisseaux', component: VaisseauxComponent},
  {path: 'addVaisseau/add', component: AddVaisseauComponent},
  {path:'detail/:id', component: DetailPlaneteComponent},
  {path:'detailVaisseau/:id', component:VaisseauxDetailComponent},
  {path:'edit/update/:id', component:EditComponent},
  {path:'editVaisseau/update/:id', component:UpdateVaisseauComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
