import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextbookSellComponent } from '../../../../../../Desktop/textbook-sell/textbook-sell.component';

describe('TextbookSellComponent', () => {
  let component: TextbookSellComponent;
  let fixture: ComponentFixture<TextbookSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextbookSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextbookSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
