import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { NavbarBawahComponent } from "../../navbar-bawah/navbar-bawah.component";

interface CarImages {
  [key: string]: string[];
}

@Component({
    selector: 'vm-mhero',
    standalone: true,
    templateUrl: './mhero.component.html',
    styleUrl: '../vehiclemodel.css',
    imports: [CommonModule, NavbarComponent, NavbarBawahComponent]
})

export class MheroComponent {
  
}