import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ResultRequest } from 'src/app/models/result-request';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy
{

  resultData: ResultRequest<Product> |undefined
  @Input() products: Product[] = []
  isDisplayModal: boolean = false
  @Input() isLoading: boolean = true
  modalProduct: Product| undefined

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
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
