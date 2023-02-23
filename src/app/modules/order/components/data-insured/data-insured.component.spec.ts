import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInsuredComponent } from './data-insured.component';

describe('DataInsuredComponent', () => {
  let component: DataInsuredComponent;
  let fixture: ComponentFixture<DataInsuredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataInsuredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataInsuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
