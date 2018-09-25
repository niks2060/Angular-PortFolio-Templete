import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  { 
    title = "8-GB Usb Pen drive";
    itemCount = 0;
    title1 = "HD Televsion";
    itemCount1 = 0;

    addItem() {
        if (this.itemCount != 10) {
            this.itemCount++;
        }
    }
    removeItem() {
        if (this.itemCount != 0) {
            this.itemCount--;
        }
    }

    addItem1() {
        if (this.itemCount1 != 10) {
            this.itemCount1++;
        }
    }
    removeItem1() {
        if (this.itemCount1 != 0) {
            this.itemCount1--;
        }
    }
}


