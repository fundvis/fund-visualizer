import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
    selector: 'ngx-netvalue-view',
    template: `
      <i *ngIf="rank <= 10" class="ion-heart" style="color: red;"></i>
      <span><b>{{ rank }}</b></span> / <span>{{ total }}</span>
    `,
})
export class RankViewComponent implements ViewCell, OnInit {

    rank: String;
    total: String;

    @Input() value: string | number;
    @Input() rowData: any;

    ngOnInit() {
        this.rank = this.value.toString();
        this.total = this.rowData['totalFunds'];
    }
}
