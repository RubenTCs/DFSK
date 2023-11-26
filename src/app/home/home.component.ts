import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarBawahComponent } from "../navbar-bawah/navbar-bawah.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface CarImages {
  [key: string]: string[];
}

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, NavbarComponent, NavbarBawahComponent, RouterLink, RouterLinkActive, RouterOutlet]
})

export class HomeComponent {
  carImages: CarImages = {
    'TopSeller': ['../../assets/img/showroom/dongfeng motor pv/shine max.png', '../../assets/img/showroom/voyah motor/voyah passion.png', '../../assets/img/showroom/mhero motor/mhero.png'],
  };

  carNames: { [key: string]: string[]} = {
    'TopSeller': ['SHINE MAX', 'VOYAH PASSION', 'MHERO'],
  }
  
  activeCar: string = 'TopSeller';

  changeCar(car: string) {
    const imageElements = document.querySelectorAll(`.carType-img img`) as NodeListOf<HTMLImageElement>;
    const textElements = document.querySelectorAll(`.carNameStyle`) as NodeListOf<HTMLImageElement>;
    
    imageElements.forEach((imageElement) => {
      if (imageElement) {
        imageElement.style.opacity = '0';
      }
    });

    textElements.forEach((textElement) => {
      if (textElement) {
        textElement.style.opacity = '0';
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

      textElements.forEach((textElement, index) => {
        if (textElement && this.carImages[this.activeCar][index]) {
          if (this.carImages[this.activeCar][index].trim() !== '') {
            textElement.src = this.carImages[this.activeCar][index];
            textElement.style.opacity = '1';
          } else {
            textElement.style.display = 'none';
          }
        }
      });
    }, 500);
  }
}