import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
    selector: 'ngx-name-viewcell',
    template: `
        <font size='0.3rem'>{{renderValue}}</font>
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
}
