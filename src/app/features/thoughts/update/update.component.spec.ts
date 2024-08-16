import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateThoughtsComponent } from './update.component';

describe('UpdateThoughtsComponent', () => {
  let component: UpdateThoughtsComponent;
  let fixture: ComponentFixture<UpdateThoughtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateThoughtsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
