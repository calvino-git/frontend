import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiHeroForm } from './anti-hero-form';

describe('AntiHeroForm', () => {
  let component: AntiHeroForm;
  let fixture: ComponentFixture<AntiHeroForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntiHeroForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntiHeroForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
