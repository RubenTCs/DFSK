import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../navbar/navbar.component';
import { NavbarBawahComponent } from "../../../footer/navbar-bawah.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface CarImages {
  [key: string]: string[];
}

@Component({
    selector: 'vm-free',
    standalone: true,
    templateUrl: './free.component.html',
    styleUrl: '../../vehiclemodel.css',
    imports: [CommonModule, NavbarComponent, NavbarBawahComponent, RouterLink, RouterLinkActive, RouterOutlet]
})

export class FreeComponent {
  
}