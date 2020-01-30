import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsReleasesComponent } from './news-releases.component';

describe('NewsReleasesComponent', () => {
  let component: NewsReleasesComponent;
  let fixture: ComponentFixture<NewsReleasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsReleasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
