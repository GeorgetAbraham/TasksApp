import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardviewComponent } from './boardview.component';

describe('BoardviewComponent', () => {
  let component: BoardviewComponent;
  let fixture: ComponentFixture<BoardviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
