import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewReceiptComponent } from './preview-receipt.component';

describe('PreviewReceiptComponent', () => {
  let component: PreviewReceiptComponent;
  let fixture: ComponentFixture<PreviewReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewReceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
