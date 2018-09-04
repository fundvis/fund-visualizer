import { Component, AfterViewInit } from '@angular/core';
import { FundService } from '../../fund.service';
import { LocalDataSource } from 'ng2-smart-table';
import { GrowthRateViewComponent } from '../widget/fund-table-viewcell/growthrate.viewcell';
import { CodeLinkViewComponent } from '../widget/fund-table-viewcell/codelink.viewcell';
import { NameLinkViewComponent } from '../widget/fund-table-viewcell/namelink.viewcell';

@Component({
    selector: 'ngx-rank',
    templateUrl: 'rank.component.html',
    styleUrls: ['rank.component.scss'],
  })
export class RankComponent implements AfterViewInit {

    source: LocalDataSource = new LocalDataSource();
    settings = {
      hideSubHeader: true,
      actions: { add: false, delete: false, edit: false },
      columns: {
        code: { title: '编号', type: 'custom', filter: false, renderComponent: CodeLinkViewComponent },
        name: { title: '名称', type: 'custom', filter: false, renderComponent: NameLinkViewComponent },
        unitNetWorth: { title: '单位净值', type: 'string', filter: false },
        dayOfGrowth: { title: '日增长率', type: 'custom', filter: false, renderComponent: GrowthRateViewComponent },
        recent1Week: { title: '近一周', type: 'custom', filter: false, renderComponent: GrowthRateViewComponent },
        recent1Month: { title: '近一月', type: 'custom', filter: false, renderComponent: GrowthRateViewComponent },
        recent3Month: { title: '近三月', type: 'custom', filter: false, renderComponent: GrowthRateViewComponent },
        recent6Month: { title: '近六月', type: 'custom', filter: false, renderComponent: GrowthRateViewComponent },
        recent1Year: { title: '近一年', type: 'custom', filter: false, renderComponent: GrowthRateViewComponent },
        recent2Year: { title: '近两年', type: 'custom', filter: false, renderComponent: GrowthRateViewComponent },
        recent3Year: { title: '近三年', type: 'custom', filter: false, renderComponent: GrowthRateViewComponent },
        fromBuild: { title: '成立以来', type: 'custom', filter: false, renderComponent: GrowthRateViewComponent },
      },
    };

    date: String;

    constructor(private service: FundService) {
        this.date = this.service.getYesterday();
    }

    ngAfterViewInit(): void {
        this.onCategoryChanged('all');
    }

    onCategoryChanged(category): void {
        const filepath = this.date + '/' + category + '.json';
        this.service.readFile(filepath).then((data: Array<any>) => {
            this.source.load(data);
        });
    }

    onSearch(event): void {
        const query = event.target.value;

        if (query && query.length > 0) {
            this.source.setFilter([
                { field: 'code', search: query },
                { field: 'name', search: query },
            ], false);
        } else {
            this.source.setFilter([]);
        }
    }
}
