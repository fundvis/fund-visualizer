import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
    selector: 'ngx-name-viewcell',
    template: `
        {{renderValue}} <span style="color: blue; cursor: pointer;" (click)="onClick()"><b>详情</b></span>
    `,
})
export class NameLinkViewComponent implements ViewCell, OnInit {
    renderValue: string;

    @Input() value: string | number;
    @Input() rowData: any;

    constructor() {
    }

    ngOnInit() {
        this.renderValue = this.value.toString();
    }

    onClick() {
        const code = this.rowData['code'];
        const url = `http://quotes.money.163.com/fund/jzzs_${code}.html`;
        window.open(url);
    }
}
