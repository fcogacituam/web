import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadUohComponent } from './comunidad-uoh.component';

describe('ComunidadUohComponent', () => {
  let component: ComunidadUohComponent;
  let fixture: ComponentFixture<ComunidadUohComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunidadUohComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunidadUohComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
