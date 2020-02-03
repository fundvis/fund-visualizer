import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
    selector: 'ngx-rank-viewcell',
    template: `
      <i *ngIf="rank <= 10" class="ion-heart" style="color: red;"></i>
      <span><b><font size='0.3rem'>{{ rank }}</font></b></span>
    `,
})
export class RankViewComponent implements ViewCell, OnInit {

    rank: number | string;
    total: number | string;

    @Input() value: string | number;
    @Input() rowData: any;

    ngOnInit() {
        this.rank = this.value.toString();
        this.total = this.rowData['totalFunds'];
    }
}
