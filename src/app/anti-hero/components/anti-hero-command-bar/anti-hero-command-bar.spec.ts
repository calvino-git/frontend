import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiHeroCommandBar } from './anti-hero-command-bar';

describe('AntiHeroCommandBar', () => {
  let component: AntiHeroCommandBar;
  let fixture: ComponentFixture<AntiHeroCommandBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntiHeroCommandBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntiHeroCommandBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
