import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E70ProComponent } from './e70pro.component';

describe('E70ProComponent', () => {
  let component: E70ProComponent;
  let fixture: ComponentFixture<E70ProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [E70ProComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(E70ProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
