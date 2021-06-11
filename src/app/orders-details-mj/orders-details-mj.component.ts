import { Component, OnInit } from '@angular/core';
import {MJDataService} from "../services/mj-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-orders-details-mj',
  templateUrl: './orders-details-mj.component.html',
  styleUrls: ['./orders-details-mj.component.css']
})
export class OrdersDetailsMJComponent implements OnInit {

  public id?: string;
  public title?: string;
  public text?: string;
  public image?: string;
  public price?: string;

  constructor(private service: MJDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string | null;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
        this.getOne(id);
      });
  }

  getOne(id: string | null) {
    this.service.getOrderItemById(id).subscribe((res: any) => {
      this.id = res['id'];
      this.title = res['title'];
      this.text = res['text'];
      this.image = res['image'];
      this.price = res['price'];
    });
  }
}
