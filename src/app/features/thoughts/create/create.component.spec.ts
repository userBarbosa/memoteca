import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThoughtsComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateThoughtsComponent;
  let fixture: ComponentFixture<CreateThoughtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateThoughtsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
