import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAddUserPage } from './modify-add-user.page';

describe('ModifyAddUserPage', () => {
  let component: ModifyAddUserPage;
  let fixture: ComponentFixture<ModifyAddUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyAddUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAddUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
