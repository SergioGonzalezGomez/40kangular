import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlesDetailComponent } from './battles-detail.component';

describe('BattlesDetailComponent', () => {
  let component: BattlesDetailComponent;
  let fixture: ComponentFixture<BattlesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattlesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
