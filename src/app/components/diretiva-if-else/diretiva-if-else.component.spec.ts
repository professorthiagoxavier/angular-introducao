import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaIfElseComponent } from './diretiva-if-else.component';

describe('DiretivaIfElseComponent', () => {
  let component: DiretivaIfElseComponent;
  let fixture: ComponentFixture<DiretivaIfElseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretivaIfElseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiretivaIfElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
