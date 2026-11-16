import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { Product } from '../services/product';

@Component({
  imports: [
    NgForOf,NgIf
  ],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
  standalone: true,
})
export class Products implements OnInit {
  products : any;
  constructor(private product:Product) {
  }
  ngOnInit() {
    this.getAllProducts();
  }
  getAllProducts():void {
    this.products = this.product.getAllProducts();
  }

   handleDelete(product: any) {
    let v = confirm('Are you sure you want to delete this product?');
    if(v==true){
       this.product.deleteProduct(product);
       this.getAllProducts();
     }

  }
}
