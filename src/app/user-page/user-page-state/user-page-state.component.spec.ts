import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageStateComponent } from './user-page-state.component';

describe('UserPageStateComponent', () => {
  let component: UserPageStateComponent;
  let fixture: ComponentFixture<UserPageStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPageStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
