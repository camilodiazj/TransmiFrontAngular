import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRutasComponent } from './get-rutas.component';

describe('GetRutasComponent', () => {
  let component: GetRutasComponent;
  let fixture: ComponentFixture<GetRutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetRutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
