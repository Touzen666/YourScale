import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarKontaComponent } from './navbar-konta.component';

describe('NavbarKontaComponent', () => {
  let component: NavbarKontaComponent;
  let fixture: ComponentFixture<NavbarKontaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarKontaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarKontaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
