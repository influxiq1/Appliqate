import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterToShareholdersComponent } from './letter-to-shareholders.component';

describe('LetterToShareholdersComponent', () => {
  let component: LetterToShareholdersComponent;
  let fixture: ComponentFixture<LetterToShareholdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterToShareholdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterToShareholdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
