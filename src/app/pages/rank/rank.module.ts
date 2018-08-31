import { NgModule } from '@angular/core';
import { RankComponent } from './rank.component';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { WidgetModule } from '../widget/widget.module';

@NgModule({
  declarations: [
    RankComponent,
  ],
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    WidgetModule,
  ],
  providers: [
  ],
})
export class RankModule {
}
