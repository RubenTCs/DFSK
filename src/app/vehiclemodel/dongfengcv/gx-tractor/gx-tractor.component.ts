import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../navbar/navbar.component';
import { NavbarBawahComponent } from "../../../footer/navbar-bawah.component";

interface CarImages {
  [key: string]: string[];
}

@Component({
    selector: 'vm-gx-tractor',
    standalone: true,
    templateUrl: './gx-tractor.component.html',
    styleUrl: '../../vehiclemodel.css',
    imports: [CommonModule, NavbarComponent, NavbarBawahComponent]
})

export class GXTractorComponent {
  
}