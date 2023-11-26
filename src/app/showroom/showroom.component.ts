import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarBawahComponent } from "../footer/navbar-bawah.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface CarImages {
  [key: string]: string[];
}

@Component({
    selector: 'app-showroom',
    standalone: true,
    templateUrl: './showroom.component.html',
    styleUrl: './showroom.component.css',
    imports: [CommonModule, NavbarComponent, NavbarBawahComponent, RouterLink, RouterLinkActive, RouterOutlet]
})

export class ShowroomComponent {
  carImages: CarImages = {
    'Dongfeng_PV': ['../../assets/img/showroom/dongfeng motor pv/shine max.png', '../../assets/img/showroom/dongfeng motor pv/huge.png', '../../assets/img/showroom/dongfeng motor pv/e70pro (ev).png'],
    'Dongfeng_CV': ['../../assets/img/showroom/dongfeng motor cv/gx tractor.png', '../../assets/img/showroom/dongfeng motor cv/special truck.png', '../../assets/img/showroom/dongfeng motor cv/vl ct.png'],
    'Voyah': ['../../assets/img/showroom/voyah motor/voyah passion.png', '../../assets/img/showroom/voyah motor/voyah dream.png', '../../assets/img/showroom/voyah motor/voyah free.png'],
    'Mhero': ['','../../assets/img/showroom/mhero motor/mhero.png']
  };

  carNames: { [key: string]: string[]} = {
    'Dongfeng_PV': ['SHINE MAX', 'HUGE', 'E70PRO (EV)',],
    'Dongfeng_CV': ['GX TRACTOR', 'SPECIAL TRUCK', 'VL CARGO TRUCK'],
    'Voyah': ['VOYAH PASSION', 'VOYAH DREAM', 'VOYAH FREE'],
    'Mhero': ['','MHERO']
  }

  carLinks: { [key: string]: string[]} = {
    'Dongfeng_PV': ['/shine-max', '/huge', '/e70pro'],
    'Dongfeng_CV': ['/gx-tractor', '/special-truck', '/vl-ct'],
    'Voyah': ['/passion', '/dream', '/free'],
    'Mhero': ['','/mhero']
  }

  activeCar: string = 'Dongfeng_PV';

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
          if (this.carImages[this.activeCar][index].trim() !== '') {
            imageElement.src = this.carImages[this.activeCar][index];
            imageElement.style.opacity = '1';
          } else {
            imageElement.style.display = 'none';
          }
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