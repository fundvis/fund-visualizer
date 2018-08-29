import { NgModule } from '@angular/core';
import { RankComponent } from './rank.component';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GrowthRateViewComponent } from './growthrate.cellview';

@NgModule({
  declarations: [
    RankComponent,
    GrowthRateViewComponent,
  ],
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
  ],
  entryComponents: [
    GrowthRateViewComponent,
  ],
  providers: [
  ],
})
export class RankModule {
}
