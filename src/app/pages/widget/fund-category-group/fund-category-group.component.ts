import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngx-fund-category-group',
    templateUrl: './fund-category-group.component.html',
})
export class FundCategoryGroupComponent {

    @Output() categoryChange = new EventEmitter<any>();

    categories = [
        { value: 'all', title: '全部' },
        { value: 'gupiao', title: '股票' },
        { value: 'zhishu', title: '指数' },
        { value: 'hunhe', title: '混合' },
        { value: 'zhaiquan', title: '债券' },
        { value: 'qdii', title: 'QDII' },
        { value: 'lof', title: 'LOF' },
        { value: 'fof', title: 'FOF' },
    ];

    radioModel = 'all';

    constructor() {
    }

    onCategoryChanged(category): void {
        if (category && category.length > 0) {
            this.categoryChange.emit(category);
        }
    }
}
