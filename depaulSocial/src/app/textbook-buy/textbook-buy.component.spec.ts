import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextbookBuyComponent } from './textbook-buy.component';

describe('TextbookBuyComponent', () => {
  let component: TextbookBuyComponent;
  let fixture: ComponentFixture<TextbookBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextbookBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextbookBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
