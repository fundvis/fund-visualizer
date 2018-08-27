import { Component, AfterViewInit } from '@angular/core';
import { GithubService } from '../../github.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
    selector: 'ngx-rank',
    templateUrl: 'rank.component.html',
  })
export class RankComponent implements AfterViewInit {

    source: LocalDataSource = new LocalDataSource();
    settings = {
      actions: {
        add: false,
        delete: false,
        edit: false,
        hideSubHeader: true,
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
        this.github.readFile('2018/08/26/gupiao.json').then((data: Array<any>) => {
            this.source.load(data);
        });
    }
}
