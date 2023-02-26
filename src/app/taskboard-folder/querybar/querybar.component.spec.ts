import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerybarComponent } from './querybar.component';

describe('QuerybarComponent', () => {
  let component: QuerybarComponent;
  let fixture: ComponentFixture<QuerybarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuerybarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuerybarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
