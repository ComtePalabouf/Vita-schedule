import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifaMatchDetailsComponent } from './fifa-match-details.component';

describe('FifaMatchDetailsComponent', () => {
  let component: FifaMatchDetailsComponent;
  let fixture: ComponentFixture<FifaMatchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifaMatchDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifaMatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
