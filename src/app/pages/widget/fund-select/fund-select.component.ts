import { Component, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { FundService } from '../../../fund.service';

@Component({
    selector: 'ngx-fund-select',
    templateUrl: './fund-select.component.html',
})
export class FundSelectComponent implements AfterViewInit {

    @Input() selectedFund;
    @Output() fundChange = new EventEmitter<any>();

    funds: Array<string>;

    constructor(private service: FundService) {
    }

    ngAfterViewInit(): void {
        this.service.readFile('allcodes.json').then(data => {
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
