import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAddProductPage } from './modify-add-product.page';

describe('ModifyAddProductPage', () => {
  let component: ModifyAddProductPage;
  let fixture: ComponentFixture<ModifyAddProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyAddProductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAddProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
