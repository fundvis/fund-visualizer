import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FundService } from '../../fund.service';
import { LocalDataSource } from 'ng2-smart-table';
import { CodeLinkViewComponent } from '../widget/fund-table-viewcell/codelink.viewcell';
import { RankViewComponent } from '../widget/fund-table-viewcell/rank.viewcell';
import { GrowthRateViewComponent } from '../widget/fund-table-viewcell/growthrate.viewcell';
import { NameLinkViewComponent } from '../widget/fund-table-viewcell/namelink.viewcell';


@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements AfterViewInit {

  date: String;
  categoryName: String;
  allFundsCount: String;

  source: LocalDataSource = new LocalDataSource();
  settings = {
    hideSubHeader: true,
    noDataMessage: '没有找到数据',
    actions: { add: false, delete: false, edit: false },
    columns: {
      code: { title: '编号', type: 'custom', filter: false, renderComponent: CodeLinkViewComponent },
      name: { title: '名称', type: 'custom', filter: false, renderComponent: NameLinkViewComponent },
      rank3Month: { title: '近三月', type: 'custom', filter: false, renderComponent: RankViewComponent },
      rank6Month: { title: '近六月', type: 'custom', filter: false, renderComponent: RankViewComponent },
      rank1Year: { title: '近一年', type: 'custom', filter: false, renderComponent: RankViewComponent },
      rank2Year: { title: '近两年', type: 'custom', filter: false, renderComponent: RankViewComponent },
      rank3Year: { title: '近三年', type: 'custom', filter: false, renderComponent: RankViewComponent },
      rankFromBuild: { title: '成立以来', type: 'custom', filter: false, renderComponent: RankViewComponent },
      unitNetWorth: { title: '单位净值', type: 'string', filter: false },
      dayOfGrowth: { title: '日增长率', type: 'custom', filter: false, renderComponent: GrowthRateViewComponent },
    },
  };

  constructor(private service: FundService, private activatedRoute: ActivatedRoute) {
    this.date = this.service.getYesterday();
  }

  ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.loadDataByCategory(params.category);
    });
  }

  loadDataByCategory(category): void {
    if (category == null) {
      category = 'all';
    }

    this._setCategoryName(category);

    const filepath = this.date + '/' + category + '.recommend.json';
    this.service.readFile(filepath).then((data: Array<any>) => {
      this.source.load(data);
      if (data.length > 0) {
        this.allFundsCount = data[0]['totalFunds'];
      } else {
        this.allFundsCount = '0';
      }
    }).catch(_ => {
      this.source.load([]);
      this.allFundsCount = '0';
    });
  }

  _setCategoryName(category): void {
    switch (category) {
      case 'all':
        this.categoryName = '全部基金';
        break;
      case 'zhishu':
        this.categoryName = '指数基金';
        break;
      case 'gupiao':
        this.categoryName = '股票基金';
        break;
      case 'hunhe':
        this.categoryName = '混合基金';
        break;
      case 'zhaiquan':
        this.categoryName = '债券基金';
        break;
      case 'qdii':
        this.categoryName = 'QDII(投资境外证券的基金)';
        break;
      case 'lof':
        this.categoryName = 'LOF(ETF中国化)';
        break;
      case 'fof':
        this.categoryName = 'FOF(投资基金的基金)';
        break;
      default:
        this.categoryName = '';
        break;
    }
  }
}
