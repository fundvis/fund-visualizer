import { Component, AfterViewInit } from '@angular/core';
import { GithubService } from '../../github.service';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements AfterViewInit {

  date: String;

  constructor(private global: GlobalService, private github: GithubService) {
    this.date = this.global.getYesterday();
  }

  ngAfterViewInit(): void {
    const filepath = this.date + '/' + 'all.recommend.json';
    this.github.readFile(filepath).then(data => {
      console.info(data);
    });
  }

}
