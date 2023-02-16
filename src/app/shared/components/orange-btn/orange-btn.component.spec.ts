import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeBtnComponent } from './orange-btn.component';

describe('OrangeBtnComponent', () => {
  let component: OrangeBtnComponent;
  let fixture: ComponentFixture<OrangeBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrangeBtnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrangeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
