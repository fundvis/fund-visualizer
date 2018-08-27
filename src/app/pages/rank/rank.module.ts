import { NgModule } from '@angular/core';
import { RankComponent } from './rank.component';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [RankComponent],
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
  ],
  providers: [
  ],
})
export class RankModule {
}
