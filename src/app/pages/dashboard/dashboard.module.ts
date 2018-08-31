import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { WidgetModule } from '../widget/widget.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    WidgetModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
