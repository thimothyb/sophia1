import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMComponent } from './sidebar-m.component';

describe('SidebarMComponent', () => {
  let component: SidebarMComponent;
  let fixture: ComponentFixture<SidebarMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
