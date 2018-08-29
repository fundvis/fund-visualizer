import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { GithubService } from '../../../github.service';

@Component({
    selector: 'ngx-fund-select',
    templateUrl: './fund-select.component.html',
})
export class FundSelectComponent implements AfterViewInit {

    @Output() fundChange = new EventEmitter<any>();

    funds: Array<string>;

    constructor(private github: GithubService) {
    }

    ngAfterViewInit(): void {
        this.github.readFile('allcodes.json').then(data => {
            this.funds = data[0]['codes'];
        }).catch(err => {
            console.error(err);
        });
    }

    changeFund(fund): void {
        if (fund && fund.length > 0) {
            this.fundChange.emit(fund);
        }
    }
}
