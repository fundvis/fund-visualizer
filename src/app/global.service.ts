import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {


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
