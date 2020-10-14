import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FundService {

    readonly FILE_API = 'https://funddata.nullpointer.ltd/';
    constructor(private http: HttpClient) {
        console.info('GithubService created');
    }

    public readFile(filepath): Promise<any> {
        const url = this.FILE_API + filepath;
        return this.http.get(url).toPromise();
    }

    /**
     * Get yesterday string formatted by yyyy/MM/dd
     */
    public getYesterday(): String {
        const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
        return this.formatDate(yesterday);
    }

    /**
     * Format date to be yyyy/MM/dd
     * @param date
     */
    public formatDate(date: Date) {
        const yyyy = date.getFullYear();
        const mm = date.getMonth() + 1;
        const dd = date.getDate();

        return yyyy + '/' + (mm < 10 ? '0' : '') + mm + '/' + (dd < 10 ? '0' : '') + dd;
    }
}
