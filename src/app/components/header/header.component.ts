import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  data: Number | undefined
  secondSub: Subscription | undefined

  siteName: string = environment.siteName

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    /* this.secondSub = this.productService.getSecond()
    .subscribe({
      next: (value: Number)=>{
        this.data = value
      },
      error: (error: any)=>{
        console.log(error)
      },
      complete: ()=>{
        console.log("Complete")
      }
    }
    ) */
  }

  ngOnDestroy(): void {
    //this.secondSub?.unsubscribe()
  }

}
