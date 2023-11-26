import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShineMaxComponent } from './shinemax.component';

describe('ShineMaxComponent', () => {
  let component: ShineMaxComponent;
  let fixture: ComponentFixture<ShineMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShineMaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShineMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
