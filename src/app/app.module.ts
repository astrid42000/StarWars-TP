import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { VaisseauxComponent } from './components/vaisseaux/vaisseaux.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailPlaneteComponent } from './components/detail-planete/detail-planete.component';
import { VaisseauxDetailComponent } from './components/vaisseaux-detail/vaisseaux-detail.component';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';
import { AddVaisseauComponent } from './components/add-vaisseau/add-vaisseau.component';
import { ToastrModule } from 'ngx-toastr';
import { InitialesPipe } from './pipes/initiales.pipe';
import { EditComponent } from './components/edit/edit.component';
import { UpdateVaisseauComponent } from './components/update-vaisseau/update-vaisseau.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanetsComponent,
    VaisseauxComponent,
    MenuComponent,
    DetailPlaneteComponent,
    VaisseauxDetailComponent,
    AddPlanetComponent,
    AddVaisseauComponent,
    InitialesPipe,
    EditComponent,
    UpdateVaisseauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
