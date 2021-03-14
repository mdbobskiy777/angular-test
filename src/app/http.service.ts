import {Observable} from "rxjs";
import {IProductsData} from "./main-page/main-page.component";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public getProducts():Observable<any> {
    return this.http.get("https://demo3062546.mockable.io/products")
  }
}
