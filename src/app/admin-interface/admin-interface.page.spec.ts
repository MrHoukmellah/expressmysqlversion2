import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInterfacePage } from './admin-interface.page';

describe('AdminInterfacePage', () => {
  let component: AdminInterfacePage;
  let fixture: ComponentFixture<AdminInterfacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInterfacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInterfacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
