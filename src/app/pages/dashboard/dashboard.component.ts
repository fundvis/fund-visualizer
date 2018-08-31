import { Component, AfterViewInit } from '@angular/core';
import { GithubService } from '../../github.service';
import { GlobalService } from '../../global.service';
import { LocalDataSource } from 'ng2-smart-table';
import { CodeLinkViewComponent } from '../widget/fund-table-viewcell/codelink.viewcell';
import { RankViewComponent } from '../widget/fund-table-viewcell/rank.viewcell';
import { GrowthRateViewComponent } from '../widget/fund-table-viewcell/growthrate.viewcell';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements AfterViewInit {

  date: String;

  source: LocalDataSource = new LocalDataSource();
  settings = {
    hideSubHeader: true,
    actions: { add: false, delete: false, edit: false },
    columns: {
      code: { title: '编号', type: 'custom', filter: false, renderComponent: CodeLinkViewComponent },
      name: { title: '名称', type: 'string', filter: false },
      unitNetWorth: { title: '单位净值', type: 'string', filter: false },
      dayOfGrowth: { title: '日增长率', type: 'custom', filter: false, renderComponent: GrowthRateViewComponent },
      rank3Month: { title: '近三月', type: 'custom', filter: false, renderComponent: RankViewComponent },
      rank6Month: { title: '近六月', type: 'custom', filter: false, renderComponent: RankViewComponent },
      rank1Year: { title: '近一年', type: 'custom', filter: false, renderComponent: RankViewComponent },
      rank2Year: { title: '近两年', type: 'custom', filter: false, renderComponent: RankViewComponent },
      rank3Year: { title: '近三年', type: 'custom', filter: false, renderComponent: RankViewComponent },
      rankFromBuild: { title: '成立以来', type: 'custom', filter: false, renderComponent: RankViewComponent },
    },
  };

  constructor(private global: GlobalService, private github: GithubService) {
    this.date = this.global.formatDate(new Date());
  }

  ngAfterViewInit(): void {
    this.onCategoryChanged('all');
  }

  onCategoryChanged(category): void {
    const filepath = this.date + '/' + category + '.recommend.json';
    this.github.readFile(filepath).then((data: Array<any>) => {
        this.source.load(data);
    });
}

}
