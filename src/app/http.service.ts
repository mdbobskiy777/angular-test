import {Observable} from "rxjs";
import {IProductsData} from "./main-page/main-page.component";
import {HttpClient} from '@angular/common/http';


export class HttpService{
    public getProducts(){
      // @ts-ignore
     return this.http.get("https://demo3062546.mockable.io/products").subscribe((data: IProductsData) => data)
    }
}
