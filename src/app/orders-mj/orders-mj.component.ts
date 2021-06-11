import { Component, OnInit } from '@angular/core';
import {MJDataService} from "../services/mj-data.service";

@Component({
  selector: 'app-orders-mj',
  templateUrl: './orders-mj.component.html',
  styleUrls: ['./orders-mj.component.css']
})
export class OrdersMJComponent implements OnInit {

  public items: any;

  constructor(private service: MJDataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getOrderItems().subscribe(response => {
      this.items = response;
    })
  }
}
