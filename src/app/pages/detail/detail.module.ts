import { NgModule } from '@angular/core';
import { DetailComponent } from './detail.component';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    ThemeModule,
  ],
  providers: [
  ],
})
export class DetailModule {
}
