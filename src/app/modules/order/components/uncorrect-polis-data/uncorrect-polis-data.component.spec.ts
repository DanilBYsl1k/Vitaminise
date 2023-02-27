import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncorrectPolisDataComponent } from './uncorrect-polis-data.component';

describe('UncorrectPolisDataComponent', () => {
  let component: UncorrectPolisDataComponent;
  let fixture: ComponentFixture<UncorrectPolisDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UncorrectPolisDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UncorrectPolisDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
