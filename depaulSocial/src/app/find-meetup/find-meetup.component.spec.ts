import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMeetupComponent } from './find-meetup.component';

describe('FindMeetupComponent', () => {
  let component: FindMeetupComponent;
  let fixture: ComponentFixture<FindMeetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindMeetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMeetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
