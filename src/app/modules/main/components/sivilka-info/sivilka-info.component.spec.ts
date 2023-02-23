import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SivilkaInfoComponent } from './sivilka-info.component';

describe('SivilkaInfoComponent', () => {
  let component: SivilkaInfoComponent;
  let fixture: ComponentFixture<SivilkaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SivilkaInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SivilkaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
