import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PreviewReceiptComponent } from 'src/app/components/preview-receipt/preview-receipt.component';


@Component({
  selector: 'app-erp',
  templateUrl: './erp.component.html',
  styleUrls: ['./erp.component.css']
})
export class ErpComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) {}  
  
  openModal() {
    const modalRef = this.modalService.open(PreviewReceiptComponent);
    // modalRef.componentInstance.id = 10;
    // modalRef.result.then((result) => {
    //   console.log(result);
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

  ngOnInit(): void {
  }

}
