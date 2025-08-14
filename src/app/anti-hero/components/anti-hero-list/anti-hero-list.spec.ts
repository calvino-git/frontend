import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiHeroList } from './anti-hero-list';

describe('AntiHeroList', () => {
  let component: AntiHeroList;
  let fixture: ComponentFixture<AntiHeroList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntiHeroList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntiHeroList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
