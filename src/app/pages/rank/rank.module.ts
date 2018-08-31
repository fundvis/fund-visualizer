import { NgModule } from '@angular/core';
import { RankComponent } from './rank.component';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CodeLinkViewComponent } from './codelink.cellview';
import { GrowthRateViewComponent } from './growthrate.cellview';
import { WidgetModule } from '../widget/widget.module';

@NgModule({
  declarations: [
    RankComponent,
    CodeLinkViewComponent,
    GrowthRateViewComponent,
  ],
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    WidgetModule,
  ],
  entryComponents: [
    CodeLinkViewComponent,
    GrowthRateViewComponent,
  ],
  providers: [
  ],
})
export class RankModule {
}
