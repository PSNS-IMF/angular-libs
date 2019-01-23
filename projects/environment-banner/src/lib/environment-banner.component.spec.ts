import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentBannerComponent } from './environment-banner.component';
import { Component, ViewChild } from '@angular/core';

describe('EnvironmentBannerComponent', () =>
{
  let component: EnvironmentBannerComponent;
  let fixture: ComponentFixture<EnvironmentBannerComponent>;

  beforeEach(async(() =>
  {
    TestBed.configureTestingModule({
      declarations: [EnvironmentBannerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(EnvironmentBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'psns-host-component',
  template: '<psns-environment-banner text="banner"></psns-environment-banner>'
})
class TestHostComponent
{
  @ViewChild(EnvironmentBannerComponent)
  public envBannerComponent: EnvironmentBannerComponent;
}
