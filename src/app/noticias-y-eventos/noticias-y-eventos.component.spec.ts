import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasYEventosComponent } from './noticias-y-eventos.component';

describe('NoticiasYEventosComponent', () => {
  let component: NoticiasYEventosComponent;
  let fixture: ComponentFixture<NoticiasYEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasYEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasYEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
