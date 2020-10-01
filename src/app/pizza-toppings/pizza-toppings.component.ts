import { Component, OnInit } from '@angular/core';
import { PizzaService, PizzaToppingDisplay } from '../pizza.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  constructor(public pizzaSvc: PizzaService) { }

  ngOnInit(): void {
    this.pizzaToppings = this.pizzaSvc.loadPizzaToppings();
  }

  pizzaToppings: PizzaToppingDisplay[] = [];

}
