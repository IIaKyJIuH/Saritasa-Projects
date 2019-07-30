import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedFilmInfoComponent } from './detailed-film-info.component';

describe('DetailedFilmInfoComponent', () => {
  let component: DetailedFilmInfoComponent;
  let fixture: ComponentFixture<DetailedFilmInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedFilmInfoComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedFilmInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
