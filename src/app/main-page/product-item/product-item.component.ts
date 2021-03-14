import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../main-page.component";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  starRating: boolean[] = [false, false, false, false, false]

  @Input() productItem!: IProduct

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges():void {

    for (let i = 1; i <= 5; i++)

      if (i < this.productItem.stars) {

        this.starRating[i-1] = true

      }
  }

  convertDate(date:number):Date {
    return new Date(date)
}
}
