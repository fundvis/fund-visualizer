import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgSelectModule } from '@ng-select/ng-select';

import { FundSelectComponent } from './fund-select/fund-select.component';
import { FundCategoryGroupComponent } from './fund-category-group/fund-category-group.component';

const WIDGET_COMPONENTS = [
  FundSelectComponent,
  FundCategoryGroupComponent,
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
