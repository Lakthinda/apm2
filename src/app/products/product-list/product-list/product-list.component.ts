import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { IProduct } from '../../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargine: number = 2;
  showImage: boolean = false;
  errorMessage: string;

  filteredProducts: IProduct[];
  products: IProduct[];
  _listFilter: string;
  // listFilter: string = 'Cart';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products,
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );
  }

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter)
                                            : this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) =>
                product.productName.toLowerCase().indexOf(filterBy) !== -1)
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void{
    console.log(message + `From Main Component`);
    this.pageTitle = 'Product List' + message;
  }

}
