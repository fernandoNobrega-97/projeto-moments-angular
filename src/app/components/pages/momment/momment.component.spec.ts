import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MommentComponent } from './momment.component';

describe('MommentComponent', () => {
  let component: MommentComponent;
  let fixture: ComponentFixture<MommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MommentComponent]
    });
    fixture = TestBed.createComponent(MommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
