import { NgModule } from '@angular/core';
import { DetailComponent } from './detail.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  providers: [
  ],
})
export class DetailModule {
}
