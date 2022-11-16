import { Component, OnInit } from '@angular/core';
import { auth_items, nav_items } from 'src/app/api/nav';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.css']
})
export class AsideNavComponent implements OnInit {

  navs_data: Item[] = nav_items
  auths_data: Item[] = auth_items

  constructor() { }

  ngOnInit(): void {
  }

}
