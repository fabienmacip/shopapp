import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.css']
})
export class PaymentCardComponent implements OnInit {

  @Input() fullWidth: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
