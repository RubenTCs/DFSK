import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../essentials/navbar/navbar.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
