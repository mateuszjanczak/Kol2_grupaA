import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersMJComponent } from './orders-mj.component';

describe('OrdersMJComponent', () => {
  let component: OrdersMJComponent;
  let fixture: ComponentFixture<OrdersMJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersMJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersMJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
