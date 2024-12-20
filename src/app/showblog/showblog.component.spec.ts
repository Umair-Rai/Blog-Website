import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowblogComponent } from './showblog.component';

describe('ShowblogComponent', () => {
  let component: ShowblogComponent;
  let fixture: ComponentFixture<ShowblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowblogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
