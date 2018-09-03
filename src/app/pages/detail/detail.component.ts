import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FundService } from '../../fund.service';

@Component({
    selector: 'ngx-fund-detail',
    templateUrl: 'detail.component.html',
})
export class DetailComponent implements AfterViewInit {

    options: any = {};
    selectedFund;

    showLoading: boolean = true;
    loadFailed: boolean = false;

    constructor(private route: ActivatedRoute, private service: FundService) {
        this.route.queryParams.subscribe(data => {
            if (data && data['code']) {
                this.selectedFund = data['code'];
                this.loadFund(data['code']);
            }
        });
    }

    ngAfterViewInit(): void {

    }

    onFundChanged(code) {
        this.loadFund(code);
    }

    loadFund(code) {
        const filepath = 'funds/' + code + '.json';
        this.service.readFile(filepath).then(data => {
            const netvalues = data[0]['netvalues'];
            if (netvalues) {
                this.loadFailed = false;
                this.setOptions(netvalues);
            } else {
                this.loadFailed = true;
                this.setOptions([]);
            }

            this.showLoading = false;
        }).catch(err => {
            console.error(err);
            this.loadFailed = true;
            this.showLoading = false;
            this.setOptions([]);
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
            legend: { data: ['bar'], align: 'left' },
            tooltip: {},
            xAxis: { data: xAxisData, silent: false, splitLine: { show: false } },
            yAxis: { },
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
}
