import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable()
export class GithubService {

    readonly FILE_API = 'https://raw.githubusercontent.com/nullpointer/fund-data/master/';
    constructor(private http: HttpClient) {
        console.info('GithubService created');
    }

    public readFile(filepath): Promise<any> {
        const url = this.FILE_API + filepath;
        return this.http.get(url).toPromise();
    }
}
