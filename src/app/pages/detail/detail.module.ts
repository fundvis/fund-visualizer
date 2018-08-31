import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { NgxEchartsModule } from 'ngx-echarts';

import { DetailComponent } from './detail.component';
import { WidgetModule } from '../widget/widget.module';

@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    ThemeModule,
    NgxEchartsModule,
    WidgetModule,
  ],
  providers: [
  ],
})
export class DetailModule {
}
