import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionHeroeComponent } from './informacion-heroe.component';

describe('InformacionHeroeComponent', () => {
  let component: InformacionHeroeComponent;
  let fixture: ComponentFixture<InformacionHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
