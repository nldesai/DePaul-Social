import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextbookSwapComponent } from './textbook-swap.component';

describe('TextbookSwapComponent', () => {
  let component: TextbookSwapComponent;
  let fixture: ComponentFixture<TextbookSwapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextbookSwapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextbookSwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
