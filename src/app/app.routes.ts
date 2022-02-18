import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PetComponent} from "./pet/pet.component";


export const AppRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'pet', component: PetComponent }
];
