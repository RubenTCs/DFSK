import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MheroComponent } from './mhero.component';

describe('MheroComponent', () => {
  let component: MheroComponent;
  let fixture: ComponentFixture<MheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MheroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
