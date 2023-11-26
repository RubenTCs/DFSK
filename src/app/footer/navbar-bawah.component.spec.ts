import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBawahComponent } from './navbar-bawah.component';

describe('NavbarBawahComponent', () => {
  let component: NavbarBawahComponent;
  let fixture: ComponentFixture<NavbarBawahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarBawahComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarBawahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
