import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialTruckComponent } from './special-truck.component';

describe('SpecialTruckComponent', () => {
  let component: SpecialTruckComponent;
  let fixture: ComponentFixture<SpecialTruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialTruckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
