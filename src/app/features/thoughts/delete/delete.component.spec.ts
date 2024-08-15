import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteThoughtsComponent } from './delete.component';

describe('DeleteComponent', () => {
  let component: DeleteThoughtsComponent;
  let fixture: ComponentFixture<DeleteThoughtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteThoughtsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
