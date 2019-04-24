import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTwitterFeedComponent } from './footer-twitter-feed.component';

describe('FooterTwitterFeedComponent', () => {
  let component: FooterTwitterFeedComponent;
  let fixture: ComponentFixture<FooterTwitterFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterTwitterFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTwitterFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
