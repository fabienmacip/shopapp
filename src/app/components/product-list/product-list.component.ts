import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

products: Product[] = [];

isDisplayModal: boolean = false;
modalProduct: Product| undefined;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    //this.products = this.productService.getProducts();
    this.productService.getProducts()
    .then((products: Product[]) => {
      this.products = products
    })
    .catch((error) => {
      this.products = []
    })
  }

  handleDisplayProductViewModal(product: Product){
    if(product){
      this.isDisplayModal = true;
      this.modalProduct = product;
    }

  }

  handleDeleteProduct(product: Product){
    this.products = this.products.filter(p => p._id !== product._id)
  }

  closeModal(){
    this.isDisplayModal = false;
    this.modalProduct = undefined;
  }

}
