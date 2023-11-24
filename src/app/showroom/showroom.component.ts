import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarBawahComponent } from "../navbar-bawah/navbar-bawah.component";

interface CarImages {
  [key: string]: string[];
}

@Component({
    selector: 'app-showroom',
    standalone: true,
    templateUrl: './showroom.component.html',
    styleUrl: './showroom.component.css',
    imports: [CommonModule, NavbarComponent, NavbarBawahComponent]
})

export class ShowroomComponent {
  
}