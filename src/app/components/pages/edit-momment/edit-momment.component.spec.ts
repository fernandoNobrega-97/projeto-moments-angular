import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMommentComponent } from './edit-momment.component';

describe('EditMommentComponent', () => {
  let component: EditMommentComponent;
  let fixture: ComponentFixture<EditMommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMommentComponent]
    });
    fixture = TestBed.createComponent(EditMommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
