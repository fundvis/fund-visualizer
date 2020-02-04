import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
    selector: 'ngx-code-viewcell',
    template: `
        <span style="color: blue; cursor: pointer;" (click)="onClick()">
            <b><font size='0.3rem'>{{ renderValue }}</font></b>
        </span>
    `,
})
export class CodeLinkViewComponent implements ViewCell, OnInit {
    renderValue: string;

    @Input() value: string | number;
    @Input() rowData: any;

    constructor() {
    }

    ngOnInit() {
        this.renderValue = this.value.toString();
    }

    onClick() {
        const code = this.value;
        const url = `http://quotes.money.163.com/fund/jzzs_${code}.html`;
        window.open(url);
    }
}
