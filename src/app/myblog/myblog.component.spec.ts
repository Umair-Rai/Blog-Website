import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyblogComponent } from './myblog.component';

describe('MyblogComponent', () => {
  let component: MyblogComponent;
  let fixture: ComponentFixture<MyblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyblogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
