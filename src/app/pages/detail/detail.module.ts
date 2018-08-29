import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgSelectModule } from '@ng-select/ng-select';

import { DetailComponent } from './detail.component';
import { FundSelectComponent } from './fund-select/fund-select.component';

@NgModule({
  declarations: [
    DetailComponent,
    FundSelectComponent,
  ],
  imports: [
    ThemeModule,
    NgxEchartsModule,
    NgSelectModule,
  ],
  providers: [
  ],
})
export class DetailModule {
}
