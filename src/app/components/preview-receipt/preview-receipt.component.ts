import { Component, OnInit } from '@angular/core';
import { ApiMangerService } from '../../services/api-manger.service'

@Component({
  selector: 'app-preview-receipt',
  templateUrl: './preview-receipt.component.html',
  styleUrls: ['./preview-receipt.component.css']
})
export class PreviewReceiptComponent implements OnInit {

  receipt;

  constructor(private apiservice: ApiMangerService) { }

  ngOnInit(): void {
    this.getReceipt();
  }

  getReceipt() {
    let obj = {};
    this.apiservice.getReceipt(obj).subscribe((resp: any) => {
      console.log("🚀 ~ file: preview-receipt.component.ts ~ line 27 ~ PreviewReceiptComponent ~ this.apiservice.getReceipt ~ resp", resp)
      this.receipt = resp;
    }, error => {
      console.log("🚀 ~ file: preview-receipt.component.ts ~ line 30 ~ PreviewReceiptComponent ~ this.apiservice.getReceipt ~ error", error)

    })

  }

}
