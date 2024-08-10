import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesCardComponent } from './hobbies-card.component';

describe('HobbiesCardComponent', () => {
  let component: HobbiesCardComponent;
  let fixture: ComponentFixture<HobbiesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HobbiesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbiesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
