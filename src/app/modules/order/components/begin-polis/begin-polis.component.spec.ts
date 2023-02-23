import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginPolisComponent } from './begin-polis.component';

describe('BeginPolisComponent', () => {
  let component: BeginPolisComponent;
  let fixture: ComponentFixture<BeginPolisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginPolisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeginPolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
