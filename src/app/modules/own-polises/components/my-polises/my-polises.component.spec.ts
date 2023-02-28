import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPolisesComponent } from './my-polises.component';

describe('MyPolisesComponent', () => {
  let component: MyPolisesComponent;
  let fixture: ComponentFixture<MyPolisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyPolisesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyPolisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
