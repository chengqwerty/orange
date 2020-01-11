import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionNavigationComponent } from './option-navigation.component';

describe('OptionNavigationComponent', () => {
  let component: OptionNavigationComponent;
  let fixture: ComponentFixture<OptionNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
