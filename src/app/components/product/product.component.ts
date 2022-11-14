import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  slug: string | undefined
  currentImage: string | undefined
  product: Product | undefined
  productSub: Subscription | undefined
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
    this.slug = this.route.snapshot.params['slug']
    this.productSub = this.productService.getProducts()
    .subscribe({
      next: (products: Product[]) => {
        this.product = products.filter(p => p.slug === this.slug)[0]
        this.currentImage = this.product.imageUrl[0]

        console.log(this.product);

        this.isLoading = false
      },
      error: (error: any)=> {
        console.log("Erreur : ", error)
        this.isLoading = true
      }
    })
  }

  ngOnDestroy(): void {
      this.productSub?.unsubscribe()
  }

  handleChangeCurrentImage(url: string): void{
    this.currentImage = url
  }

}
