import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgSelectModule } from '@ng-select/ng-select';

import { FundSelectComponent } from './fund-select/fund-select.component';
import { FundCategoryGroupComponent } from './fund-category-group/fund-category-group.component';
import { CodeLinkViewComponent } from './fund-table-viewcell/codelink.viewcell';
import { NameLinkViewComponent } from './fund-table-viewcell/namelink.viewcell';
import { GrowthRateViewComponent } from './fund-table-viewcell/growthrate.viewcell';
import { RankViewComponent } from './fund-table-viewcell/rank.viewcell';

const WIDGET_COMPONENTS = [
  FundSelectComponent,
  FundCategoryGroupComponent,
  CodeLinkViewComponent,
  NameLinkViewComponent,
  GrowthRateViewComponent,
  RankViewComponent,
];

@NgModule({
  declarations: WIDGET_COMPONENTS,
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    NgSelectModule,
  ],
  exports: WIDGET_COMPONENTS,
  entryComponents: [
    CodeLinkViewComponent,
    GrowthRateViewComponent,
    RankViewComponent,
    NameLinkViewComponent,
  ],
  providers: [
  ],
})
export class WidgetModule {
}
