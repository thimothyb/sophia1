import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMComponent } from './tabla-m.component';

describe('TablaMComponent', () => {
  let component: TablaMComponent;
  let fixture: ComponentFixture<TablaMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
