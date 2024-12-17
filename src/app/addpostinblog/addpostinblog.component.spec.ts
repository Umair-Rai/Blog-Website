import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpostinblogComponent } from './addpostinblog.component';

describe('AddpostinblogComponent', () => {
  let component: AddpostinblogComponent;
  let fixture: ComponentFixture<AddpostinblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddpostinblogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpostinblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
