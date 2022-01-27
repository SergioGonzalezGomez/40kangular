import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegionsComponent } from './legions.component';

describe('LegionsComponent', () => {
  let component: LegionsComponent;
  let fixture: ComponentFixture<LegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
