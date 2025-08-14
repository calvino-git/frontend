import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeOne } from './pipe-one';

describe('PipeOne', () => {
  let component: PipeOne;
  let fixture: ComponentFixture<PipeOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
