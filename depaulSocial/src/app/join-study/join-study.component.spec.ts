import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinStudyComponent } from './join-study.component';

describe('JoinStudyComponent', () => {
  let component: JoinStudyComponent;
  let fixture: ComponentFixture<JoinStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
