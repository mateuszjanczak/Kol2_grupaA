import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsMJComponent } from './orders-details-mj.component';

describe('OrdersDetailsMJComponent', () => {
  let component: OrdersDetailsMJComponent;
  let fixture: ComponentFixture<OrdersDetailsMJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsMJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsMJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
