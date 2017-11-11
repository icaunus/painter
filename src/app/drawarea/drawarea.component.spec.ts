import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawAreaComponent } from './drawarea.component';

describe('DrawareaComponent', () => {
  let component: DrawAreaComponent;
  let fixture: ComponentFixture<DrawAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
