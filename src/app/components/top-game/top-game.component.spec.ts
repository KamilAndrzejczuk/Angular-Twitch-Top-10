import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGameComponent } from './top-game.component';

describe('TopGameComponent', () => {
  let component: TopGameComponent;
  let fixture: ComponentFixture<TopGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
