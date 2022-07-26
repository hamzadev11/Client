import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProgrammeComponent } from './detail-programme.component';

describe('DetailProgrammeComponent', () => {
  let component: DetailProgrammeComponent;
  let fixture: ComponentFixture<DetailProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProgrammeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
