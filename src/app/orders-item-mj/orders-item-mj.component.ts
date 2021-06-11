import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-mj',
  templateUrl: './orders-item-mj.component.html',
  styleUrls: ['./orders-item-mj.component.css']
})
export class OrdersItemMJComponent implements OnInit {

  @Input() id?: string;
  @Input() title?: string;
  @Input() text?: string;
  @Input() image?: string;
  @Input() price?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
