import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveIfComponent } from './directive-if.component';

describe('DirectiveIfComponent', () => {
  let component: DirectiveIfComponent;
  let fixture: ComponentFixture<DirectiveIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveIfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectiveIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
