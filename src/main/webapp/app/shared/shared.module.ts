import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HotdeskSharedLibsModule, HotdeskSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [HotdeskSharedLibsModule, HotdeskSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [HotdeskSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HotdeskSharedModule {
  static forRoot() {
    return {
      ngModule: HotdeskSharedModule
    };
  }
}
