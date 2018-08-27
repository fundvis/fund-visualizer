import { Injectable } from '@angular/core';
import * as Github from '@octokit/rest';
import { Buffer } from 'buffer';

const OWNER = 'nullpointer';
const REPO = 'fund-data';

@Injectable()
export class GithubService {
    private github: Github;

    constructor() {
        this.github = new Github();
        console.info('GithubService created');
    }

    public readFile(filepath) {
        return this.github.repos.getContent({
            owner: OWNER,
            repo: REPO,
            path: filepath,
        }).then(({data, headers, status}) => {
            if (status === 200) {
                const content = this.decode(data.content);
                return Promise.resolve(JSON.parse(content));
            } else {
                return Promise.reject('Failed to read file ' + filepath);
            }
        }).catch(err => {
            if (err.code === 403) {
                // This API returns blobs up to 1 MB in size, using blob api
                return this.readBlob();
            }
            console.error(err);
        });
    }

    public readBlob() {
        return this.github.gitdata.getBlob({
            owner: OWNER,
            repo: REPO,
            file_sha: 'e9f1cd917801c175f0af346a248f208c607ab730',
        }).then(({data, headers, status}) => {
            const content = this.decode(data.content);
            return Promise.resolve(JSON.parse(content));
        }).catch(err => {
            return Promise.reject('Failed to read file');
        });
    }

    private decode(content) {
      return new Buffer(content, 'base64').toString('utf8');
    }
}
