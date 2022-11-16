import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { auth_items, nav_items } from 'src/app/api/nav';
import { Item } from 'src/app/models/item';
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
  navs_data: Item[] = nav_items
  auths_data: Item[] = auth_items

  isDisplayedMobileNav: boolean = false;

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

  handleDisplayMobileNav(){
    this.isDisplayedMobileNav = !this.isDisplayedMobileNav;
    console.log(this.isDisplayedMobileNav)
  }

  handleCloseMobileNav():void{
    this.isDisplayedMobileNav = false;
  }

}
