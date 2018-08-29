import { NgModule } from '@angular/core';
import { RankComponent } from './rank.component';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CodeLinkViewComponent } from './codelink.cellview';
import { GrowthRateViewComponent } from './growthrate.cellview';

@NgModule({
  declarations: [
    RankComponent,
    CodeLinkViewComponent,
    GrowthRateViewComponent,
  ],
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
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
