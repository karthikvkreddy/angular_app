import { Component,OnInit } from "@angular/core";
import { IProduct } from "./product";
import { productService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth = 50;    // no need to specify the data type for the values 
    imageMargin = 2;
    showImage: boolean = false;

    // using getter and setter , called automatically when used with ngModel
    private _listFilter : string ='';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('in setter',value);
        this.filteredProducts = this.performFilter(value)
    }

    filteredProducts: IProduct[] = [];


    products: IProduct[] = [];
      constructor(private productService: productService) {};

    ngOnInit(): void {
        // initailiase value
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }

      // filtering using arrow function
      performFilter(filterBy: string):IProduct[] {
        return this.products.filter((product:IProduct) => 
            product.productName.toLowerCase().includes(filterBy.toLowerCase()));
      }

      toggleEvent(): void {
        this.showImage = !this.showImage;           // NOT operator
      }

      onRatingClicked(message: string): void {
        this.pageTitle = 'Product List' + message;
      }
}   