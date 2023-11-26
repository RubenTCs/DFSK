import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShowroomComponent } from './showroom/showroom.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShineMaxComponent } from './vehiclemodel/dongfengpv/shinemax/shinemax.component';
import { HugeComponent } from './vehiclemodel/dongfengpv/huge/huge.component';
import { E70ProComponent } from './vehiclemodel/dongfengpv/e70pro/e70pro.component';
import { GXTractorComponent } from './vehiclemodel/dongfengcv/gx-tractor/gx-tractor.component';
import { VLCTComponent } from './vehiclemodel/dongfengcv/vl-ct/vl-ct.component';
import { SpecialTruckComponent } from './vehiclemodel/dongfengcv/special-truck/special-truck.component';
import { PassionComponent } from './vehiclemodel/voyah/passion/passion.component';
import { DreamComponent } from './vehiclemodel/voyah/dream/dream.component';
import { FreeComponent } from './vehiclemodel/voyah/free/free.component';
import { MheroComponent } from './vehiclemodel/mhero/mhero.component';
import { EmptyComponent } from './empty/empty.component';


export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component:LoginComponent},
    {path: 'home', component:HomeComponent},
    {path: 'showroom', component: ShowroomComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'vehiclemodel', redirectTo: 'showroom', pathMatch: 'full'},
    {path: 'vehiclemodel' ,component:EmptyComponent, children: [
        {path: 'shine-max', component: ShineMaxComponent},
        {path: 'huge', component: HugeComponent},
        {path: 'e70pro', component: E70ProComponent},
        {path: 'gx-tractor', component: GXTractorComponent},
        {path: 'vl-ct', component: VLCTComponent},
        {path: 'special-truck', component: SpecialTruckComponent},
        {path: 'passion', component: PassionComponent},
        {path: 'dream', component: DreamComponent},
        {path: 'free', component: FreeComponent},
        {path: 'mhero', component: MheroComponent}
    ]}
];

