import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEstacionesComponent } from './get-estaciones.component';

describe('GetEstacionesComponent', () => {
  let component: GetEstacionesComponent;
  let fixture: ComponentFixture<GetEstacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEstacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEstacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
