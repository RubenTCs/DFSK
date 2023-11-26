import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarBawahComponent } from '../navbar-bawah/navbar-bawah.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NavbarComponent, NavbarBawahComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
