import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCharacterInfoComponent } from './detailed-character-info.component';

describe('DetailedCharacterInfoComponent', () => {
  let component: DetailedCharacterInfoComponent;
  let fixture: ComponentFixture<DetailedCharacterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedCharacterInfoComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedCharacterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
