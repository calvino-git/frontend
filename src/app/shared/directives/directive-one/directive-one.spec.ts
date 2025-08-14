import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveOne } from './directive-one';

describe('DirectiveOne', () => {
  let component: DirectiveOne;
  let fixture: ComponentFixture<DirectiveOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
