import {Component, OnInit} from '@angular/core';
import {HttpService} from "../http.service";


export interface IProduct {

  in_potential_products: boolean,
  asin: string,
  price: number,
  weight: number,
  updated_at: number,
  name: string,
  shipping_weight: number | null,
  domain: string,
  votes_count: number,
  daily_cashflow: number,
  currency: string,
  img: string,
  daily_sales: number,
  stars: number,
  bsr_value: number,
  brand_class: string | null,
  size: number[],
  link: string,
  bsr_category: string,
  brand: string

}

export interface IProductsData {

  count_products: number,
  page_count: number,
  page: number,
  products: IProduct[]

}

@Component({

  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']

})
export class MainPageComponent implements OnInit {

  filterText = ""
  productsData!: IProductsData
  filteredProducts!: IProduct[]

  constructor(private http: HttpService) {

  }

  ngOnInit(): void {

    this.http.getProducts().subscribe((data: IProductsData) => {
      this.productsData = data
      this.filteredProducts = this.productsData.products

    })

  }

  nameFilter(filterText: string) {

    return this.productsData.products.filter(pr => pr.name.toLowerCase().includes(filterText.toLowerCase()))
  }

  inputHandler(event: any) {

    this.filterText = event.target.value
    this.filteredProducts = this.nameFilter(this.filterText)

  }

}
