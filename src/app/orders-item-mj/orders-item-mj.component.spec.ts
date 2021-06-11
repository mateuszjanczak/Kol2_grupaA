import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemMJComponent } from './orders-item-mj.component';

describe('OrdersItemMJComponent', () => {
  let component: OrdersItemMJComponent;
  let fixture: ComponentFixture<OrdersItemMJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemMJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemMJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
