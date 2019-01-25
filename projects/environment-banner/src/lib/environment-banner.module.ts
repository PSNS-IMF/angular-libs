import { NgModule } from '@angular/core';
import { EnvironmentBannerComponent } from './environment-banner.component';
import { IeBrowserBannerComponent } from './ie-browser-banner/ie-browser-banner.component';

@NgModule({
  declarations: [EnvironmentBannerComponent, IeBrowserBannerComponent],
  imports: [
  ],
  exports: [EnvironmentBannerComponent]
})
export class EnvironmentBannerModule { }
