import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowroomComponent } from './showroom/showroom.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'home', component:HomeComponent},
    {path: 'showroom', component: ShowroomComponent}
];
