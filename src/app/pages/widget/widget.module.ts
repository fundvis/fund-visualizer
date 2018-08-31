import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgSelectModule } from '@ng-select/ng-select';

import { FundSelectComponent } from './fund-select/fund-select.component';


const WIDGET_COMPONENTS = [
  FundSelectComponent,
];

@NgModule({
  declarations: WIDGET_COMPONENTS,
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    NgSelectModule,
  ],
  exports: WIDGET_COMPONENTS,
  providers: [
  ],
})
export class WidgetModule {
}
