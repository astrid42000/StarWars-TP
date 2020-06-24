import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlaneteComponent } from './detail-planete.component';

describe('DetailPlaneteComponent', () => {
  let component: DetailPlaneteComponent;
  let fixture: ComponentFixture<DetailPlaneteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPlaneteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPlaneteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
