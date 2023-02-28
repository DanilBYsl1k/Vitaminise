import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolisesComponent } from './polises.component';

describe('PolisesComponent', () => {
  let component: PolisesComponent;
  let fixture: ComponentFixture<PolisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
