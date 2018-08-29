import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { Router } from '@angular/router';

@Component({
    selector: 'ngx-netvalue-view',
    template: `
      <span style="color: blue; cursor: pointer;" (click)="onClick()">{{ renderValue }}</span>
    `,
})
export class CodeLinkViewComponent implements ViewCell, OnInit {
    renderValue: string;

    @Input() value: string | number;
    @Input() rowData: any;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.renderValue = this.value.toString();
    }

    onClick() {
        this.router.navigate(['/pages/detail'], { queryParams: { code: this.value }});
    }
}
