import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { MsgService } from 'src/app/shared/services/msg.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  allProducts = [];
  categories = [];
  results = [];
  names = [];
  submitting: boolean = false;
  product;
  constructor(
    public router: Router,
    public productService: ProductService,
    public msgService: MsgService
  ) {
    this.product = new Product({});
    this.product.category = '';
    this.product.name = '';
  }

  ngOnInit(): void {
    this.productService.search({})
      .subscribe(
        (data: any) => {
          this.allProducts = data;
          data.forEach(item => {
            if (this.categories.indexOf(item.category) == -1)
              this.categories.push(item.category);
          });
        },
        error => {
          this.msgService.showError(error)
        }
      )
  }


  categoryChanged(val) {
    this.names = this.allProducts.filter((item) => {
      if (item.category == val) {
        return true;
      }
    })
  }


  submit() {
    this.submitting = true;
    this.productService.search(this.product)
      .subscribe(
        (data: any) => {
          if (data.length) {
            this.results = data;

          } else {
            this.msgService.showInfo('No any product matched your search query');
          }
          this.submitting = false;

        },
        error => {
          this.msgService.showError(error)
          this.submitting = false;
        }
      )
  }


  resetSearch() {
    this.results.length = 0;
  }
}

