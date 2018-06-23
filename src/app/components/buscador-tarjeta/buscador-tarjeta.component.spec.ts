import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorTarjetaComponent } from './buscador-tarjeta.component';

describe('BuscadorTarjetaComponent', () => {
  let component: BuscadorTarjetaComponent;
  let fixture: ComponentFixture<BuscadorTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
