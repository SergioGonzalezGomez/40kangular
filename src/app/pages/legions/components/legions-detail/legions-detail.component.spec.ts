import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegionsDetailComponent } from './legions-detail.component';

describe('LegionsDetailComponent', () => {
  let component: LegionsDetailComponent;
  let fixture: ComponentFixture<LegionsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegionsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegionsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
