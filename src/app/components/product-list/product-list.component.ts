import { Component, OnInit, OnDestroy } from '@angular/core';
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
  products: Product[] = []

  isDisplayModal: boolean = false;
  modalProduct: Product| undefined;
  productsSub: Subscription | undefined;
  isLoading: boolean = true;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    //this.products = this.productService.getProducts();
    this.productsSub = this.productService.getProducts()
    .subscribe({
      next: (resultData: ResultRequest<Product>)=>{
        if(resultData.isSuccess){
          this.products = resultData.results
        }
        this.isLoading = false
      },
      error: (error: any)=>{
        console.log("Erreur : ", error)
        this.isLoading = true
      },
      complete: ()=>{
        console.log("product-list.ts -> Product list init completed")
      },
    })


    /*     .then((products: Product[]) => {
      this.products = products
    })
    .catch((error) => {
      this.products = []
    }) */
  }

  ngOnDestroy(): void {
      this.productsSub?.unsubscribe();
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
