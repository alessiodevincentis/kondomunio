import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagraficaAmministratoriComponent } from './anagrafica-amministratori.component';

describe('AnagraficaAmministratoriComponent', () => {
  let component: AnagraficaAmministratoriComponent;
  let fixture: ComponentFixture<AnagraficaAmministratoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnagraficaAmministratoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagraficaAmministratoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
