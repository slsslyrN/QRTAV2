import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaDocentePage } from './vista-docente.page';

describe('VistaDocentePage', () => {
  let component: VistaDocentePage;
  let fixture: ComponentFixture<VistaDocentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
