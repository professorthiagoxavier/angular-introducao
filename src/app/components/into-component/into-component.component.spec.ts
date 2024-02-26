import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoComponentComponent } from './into-component.component';

describe('IntoComponentComponent', () => {
  let component: IntoComponentComponent;
  let fixture: ComponentFixture<IntoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
