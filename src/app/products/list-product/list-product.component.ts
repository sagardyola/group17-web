import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { MsgService } from 'src/app/shared/services/msg.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Array<any>;
  isLoading: boolean = false;
  imgUrl;
  constructor(
    public router: Router,
    public productService: ProductService,
    public msgService: MsgService
  ) {
    this.imgUrl = environment.ImgUrl;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.productService.get()
      .subscribe((data: any) => {
        this.isLoading = false;
        this.products = data;
      }, err => {
        this.isLoading = false;
        this.msgService.showError(err);
      })
  }

  remove(id, index) {
    var con = confirm('Are you sure to remove?');
    if (con) {
      this.productService.remove(id).subscribe(
        data => {
          this.msgService.showInfo('Product Deleted');
          this.products.splice(index, 1);
        }, err => {
          this.msgService.showError(err);
        }
      )
    }

  }

}
