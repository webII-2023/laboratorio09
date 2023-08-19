import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductosComponent } from './admin-productos.component';

describe('AdminProductosComponent', () => {
  let component: AdminProductosComponent;
  let fixture: ComponentFixture<AdminProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductosComponent]
    });
    fixture = TestBed.createComponent(AdminProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
