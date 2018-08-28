import { Component, AfterViewInit } from '@angular/core';
import { GithubService } from '../../github.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
    selector: 'ngx-rank',
    templateUrl: 'rank.component.html',
  })
export class RankComponent implements AfterViewInit {

    categories = [
        { value: 'all', title: '全部' },
        { value: 'gupiao', title: '股票' },
        { value: 'zhishu', title: '指数' },
        { value: 'hunhe', title: '混合' },
        { value: 'zhaiquan', title: '债券' },
        { value: 'qdii', title: 'QDII' },
        { value: 'lof', title: 'LOF' },
        { value: 'fof', title: 'FOF' },
    ];

    source: LocalDataSource = new LocalDataSource();
    settings = {
      hideSubHeader: true,
      actions: {
        add: false,
        delete: false,
        edit: false,
      },
      columns: {
        code: { title: '编号', type: 'string' },
        name: { title: '名称', type: 'string' },
        unitNetWorth: { title: '单位净值', type: 'string' },
        dayOfGrowth: { title: '日增长率', type: 'string' },
        recent1Week: { title: '近一周', type: 'string' },
        recent1Month: { title: '近一月', type: 'string' },
        recent3Month: { title: '近三月', type: 'string' },
        recent6Month: { title: '近六月', type: 'string' },
        recent1Year: { title: '近一年', type: 'string' },
        recent2Year: { title: '近两年', type: 'string' },
        recent3Year: { title: '近三年', type: 'string' },
        fromBuild: { title: '成立以来', type: 'string' },
      },
    };

    constructor(private github: GithubService) {
    }

    ngAfterViewInit(): void {
        this.onCategoryChanged('all');
    }

    onCategoryChanged(category): void {
        const filepath = '2018/08/26/' + category + '.json';
        this.github.readFile(filepath).then((data: Array<any>) => {
            this.source.load(data);
        });
    }
}
