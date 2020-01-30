import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SECFilingsComponent } from './sec-filings.component';

describe('SECFilingsComponent', () => {
  let component: SECFilingsComponent;
  let fixture: ComponentFixture<SECFilingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SECFilingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SECFilingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
