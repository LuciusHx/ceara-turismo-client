import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CratePlacePage } from './crate-place.page';

describe('CratePlacePage', () => {
  let component: CratePlacePage;
  let fixture: ComponentFixture<CratePlacePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CratePlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
