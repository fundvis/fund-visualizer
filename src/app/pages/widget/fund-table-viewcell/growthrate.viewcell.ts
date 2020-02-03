import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
    selector: 'ngx-growth-viewcell',
    template: `
      <span [ngStyle]="{'color':value > 0 ? 'red' : 'green' }" ><font size='0.3rem'>{{ renderValue }}</font></span>
    `,
})
export class GrowthRateViewComponent implements ViewCell, OnInit {
    renderValue: string;

    @Input() value: string | number;
    @Input() rowData: any;

    ngOnInit() {
        this.renderValue = this.value ? this.value.toString() + '%' : '-';
    }
}
