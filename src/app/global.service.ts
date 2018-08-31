import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {


    /**
     * Get yesterday string formatted by yyyy/MM/dd
     */
    public getYesterday(): String {
        const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
        const yyyy = yesterday.getFullYear();
        const mm = yesterday.getMonth() + 1;
        const dd = yesterday.getDate();

        return yyyy + '/' + (mm < 10 ? '0' : '') + mm + '/' + (dd < 10 ? '0' : '') + dd;
    }
}
