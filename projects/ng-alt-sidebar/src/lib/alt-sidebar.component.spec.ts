import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltSidebar } from './alt-sidebar.component';

describe('AltSidebarComponent', () => {
  let component: AltSidebar;
  let fixture: ComponentFixture<AltSidebar>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltSidebar]
    });
    fixture = TestBed.createComponent(AltSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
