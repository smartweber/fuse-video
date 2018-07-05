import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVideoDialogComponent } from './add-video-dialog.component';

describe('AddVideoDialogComponent', () => {
  let component: AddVideoDialogComponent;
  let fixture: ComponentFixture<AddVideoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVideoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVideoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
