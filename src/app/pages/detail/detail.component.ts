import { Component, AfterViewInit } from '@angular/core';
import { GithubService } from '../../github.service';

@Component({
    selector: 'ngx-fund-detail',
    templateUrl: 'detail.component.html',
})
export class DetailComponent implements AfterViewInit {
    constructor(private github: GithubService) {
    }

    ngAfterViewInit(): void {
        this.github.readFile('000057.json').then(data => {
            console.info(data);
        });
    }

    onSearch(event): void {

    }
}
