import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarBawahComponent } from "../footer/navbar-bawah.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [CommonModule, NavbarComponent, NavbarBawahComponent, RouterLink, RouterLinkActive, RouterOutlet]
})

export class ContactComponent {

}