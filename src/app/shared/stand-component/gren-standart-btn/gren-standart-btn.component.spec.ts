import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrenStandartBtnComponent } from './gren-standart-btn.component';

describe('GrenStandartBtnComponent', () => {
  let component: GrenStandartBtnComponent;
  let fixture: ComponentFixture<GrenStandartBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrenStandartBtnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GrenStandartBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
