import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltSidebarContainerComponent } from './alt-sidebar-container.component';

describe('AltSidebarContainer', () => {
  let component: AltSidebarContainerComponent;
  let fixture: ComponentFixture<AltSidebarContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltSidebarContainerComponent]
    });
    fixture = TestBed.createComponent(AltSidebarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
