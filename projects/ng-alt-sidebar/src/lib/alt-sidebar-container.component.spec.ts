import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltSidebarContainer } from './alt-sidebar-container.component';

describe('AltSidebarContainer', () => {
  let component: AltSidebarContainer;
  let fixture: ComponentFixture<AltSidebarContainer>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltSidebarContainer]
    });
    fixture = TestBed.createComponent(AltSidebarContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
