import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VLCTComponent } from './vl-ct.component';

describe('VLCTComponent', () => {
  let component: VLCTComponent;
  let fixture: ComponentFixture<VLCTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VLCTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VLCTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
