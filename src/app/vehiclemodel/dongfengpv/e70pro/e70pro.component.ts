import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../navbar/navbar.component';
import { NavbarBawahComponent } from "../../../footer/navbar-bawah.component";

interface CarImages {
  [key: string]: string[];
}

@Component({
    selector: 'vm-e70pro',
    standalone: true,
    templateUrl: './e70pro.component.html',
    styleUrl: '../../vehiclemodel.css',
    imports: [CommonModule, NavbarComponent, NavbarBawahComponent]
})

export class E70ProComponent {
  
}