import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaUComponent } from './tabla-u.component';

describe('TablaUComponent', () => {
  let component: TablaUComponent;
  let fixture: ComponentFixture<TablaUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
