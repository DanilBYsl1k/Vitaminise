import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolisPagesComponent } from './polis-pages.component';

describe('PolisPagesComponent', () => {
  let component: PolisPagesComponent;
  let fixture: ComponentFixture<PolisPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PolisPagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PolisPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
