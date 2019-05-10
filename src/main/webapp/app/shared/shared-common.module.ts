import { NgModule } from '@angular/core';

import { HotdeskSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [HotdeskSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [HotdeskSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class HotdeskSharedCommonModule {}
