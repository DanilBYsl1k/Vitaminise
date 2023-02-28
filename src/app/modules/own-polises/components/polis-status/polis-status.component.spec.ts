import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolisStatusComponent } from './polis-status.component';

describe('PolisStatusComponent', () => {
  let component: PolisStatusComponent;
  let fixture: ComponentFixture<PolisStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PolisStatusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PolisStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
