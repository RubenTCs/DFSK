import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarBawahComponent } from "../navbar-bawah/navbar-bawah.component";

interface CarImages {
  [key: string]: string[];
}

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, NavbarComponent, NavbarBawahComponent]
})

export class HomeComponent {
  carImages: CarImages = {
    'Dongfeng_PV': ['../../assets/img/placeholder3.jpg', '../../assets/img/placeholder3.jpg', '../../assets/img/placeholder3.jpg'],
    'Dongfeng_CV': ['../../assets/img/placeholder3.jpg', '../../assets/img/placeholder3.jpg', '../../assets/img/placeholder3.jpg'],
    'Voyah': ['../../assets/img/placeholder3.jpg'],
    'Mhero': ['../../assets/img/placeholder3.jpg'],
  };

  
  activeCar: string = 'Dongfeng_PV';

  changeCar(car: string) {
    const imageElements = document.querySelectorAll(`.carType-img img`) as NodeListOf<HTMLImageElement>;
    imageElements.forEach((imageElement) => {
      if (imageElement) {
        imageElement.style.opacity = '0';
      }
    });
    
    setTimeout(() => {
      this.activeCar = car;
      
      imageElements.forEach((imageElement, index) => {
        if (imageElement && this.carImages[this.activeCar][index]) {
          imageElement.src = this.carImages[this.activeCar][index];
          imageElement.style.opacity = '1';
        }
      });
    }, 500);
  }
      
  carLinks: { [key: string]: string } = {
    'Dongfeng_PV': '#1',
    'Dongfeng_CV': '#2',
    'Voyah': '#3',
    'Mhero': '#4',
  };

  buttonNames: { [key: string]: string} = {
    'Dongfeng_PV': 'See More PV!',
    'Dongfeng_CV': 'See More CV!',
    'Voyah': 'See More Voyah!',
    'Mhero': 'See More Mhero!',
  }
}