import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVaisseauComponent } from './update-vaisseau.component';

describe('UpdateVaisseauComponent', () => {
  let component: UpdateVaisseauComponent;
  let fixture: ComponentFixture<UpdateVaisseauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVaisseauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVaisseauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
