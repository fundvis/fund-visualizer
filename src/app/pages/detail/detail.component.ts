import { Component, AfterViewInit } from '@angular/core';
import { GithubService } from '../../github.service';

@Component({
    selector: 'ngx-fund-detail',
    templateUrl: 'detail.component.html',
})
export class DetailComponent implements AfterViewInit {

    options: any = {};

    constructor(private github: GithubService) {
    }

    ngAfterViewInit(): void {
        this.github.readFile('000057.json').then(data => {
            const netvalues = data[0]['netvalues'];
            if (netvalues) {
                this.setOptions(netvalues);
            }
        });
    }

    setOptions(data) {
        const xAxisData = [];
        const yAxisData = [];

        for (let i = data.length - 1; i >= 0; i--) {
            xAxisData.push(data[i][0]);
            yAxisData.push(data[i][1]);
        }

        this.options = {
            legend: {
                data: ['bar'],
                align: 'left',
            },
            tooltip: {},
            xAxis: {
                data: xAxisData,
                silent: false,
                splitLine: {
                    show: false,
                },
            },
            yAxis: {
            },
            series: [{
                name: '单位净值',
                type: 'bar',
                data: yAxisData,
                animationDelay: function (idx) {
                    return idx >> 2;
                },
            }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx >> 2;
            },
        };
    }

    onSearch(event): void {

    }
}
