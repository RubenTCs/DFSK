import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GXTractorComponent } from './gx-tractor.component';

describe('GXTractorComponent', () => {
  let component: GXTractorComponent;
  let fixture: ComponentFixture<GXTractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GXTractorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GXTractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
