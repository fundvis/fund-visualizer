import { Injectable } from '@angular/core';
import * as Github from '@octokit/rest';

@Injectable()
export class GithubService {
    private github: Github;

    constructor() {
        this.github = new Github();
        console.info('GithubService created');
    }

    public readFile(filepath) {
        return this.github.repos.getContent({
            owner: 'nullpointer',
            repo: 'fund-data',
            path: filepath,
        }).then(({data, headers, status}) => {
            if (status === 200) {
                return Promise.resolve(JSON.parse(atob(data.content)));
            } else {
                return Promise.reject('Failed to read file ' + filepath);
            }
        });
    }
}
