import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTroncalesComponent } from './get-troncales.component';

describe('GetTroncalesComponent', () => {
  let component: GetTroncalesComponent;
  let fixture: ComponentFixture<GetTroncalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTroncalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTroncalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
