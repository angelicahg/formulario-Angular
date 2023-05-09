import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariogComponent } from './formulariog.component';

describe('FormulariogComponent', () => {
  let component: FormulariogComponent;
  let fixture: ComponentFixture<FormulariogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulariogComponent]
    });
    fixture = TestBed.createComponent(FormulariogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
