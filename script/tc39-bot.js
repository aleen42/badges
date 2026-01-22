const [, , GITHUB_ACCESS_TOKEN, VERBOSE] = process.argv;

listOrgRepos('tc39').then(repos => {
    const proposals = repos.map(({full_name, name, default_branch}) => [full_name, name, default_branch]).filter(([fullName]) => /tc39\/proposal-/.test(fullName));
    Promise.all(proposals.map(([fullName, name, base]) => readRepo(fullName).then(([content]) => {
        const RegExp = /Stage\s*([1234])/gi;
        if (RegExp.test(content)) {
            return forkRepo(fullName).then(modify);
        }

        function modify() {
            return readRepo(`badges-bot/${name}`).then(([content, path, sha]) => {
                const stage = content.match(RegExp).map(s => parseInt(s.replace(RegExp, '$1'))).sort((a, b) => b - a)[0];
                if (!content.includes('aleen42')) {
                    return commitContent().then(createPR);

                    function commitContent() {
                        return request(`/repos/badges-bot/${name}/contents/${path}`, {
                            message: 'Use badges for states',
                            sha,
                            content: Buffer.from(content.replace(/^(#)+(\s)*(.*)\n/, `$&\n![Stage ${stage}](https://badges.aleen42.com/src/tc39_${stage + 1}.svg)\n`)).toString('base64'),
                            committer: {name: 'Aleen', email: 'aleen42@vip.qq.com'},
                        }, 'PUT');
                    }

                    function createPR() {
                        return request(`/repos/tc39/${name}/pulls`, {
                            title: 'Add a badge for specifying current stage',
                            head: `badges-bot:${base}`,
                            base,
                            body: 'According to https://es.discourse.group/t/a-standard-badge-for-tc39/731, automatically generate a badge for specifying current stage of the proposal.',
                        }, 'POST');
                    }
                }
            });

        }
    }))).then(() => console.log('done'));
});

// listOrgRepos('badges-bot').then(repos => Promise.all(repos.map(({full_name}) => request(`/repos/${full_name}`, {}, 'DELETE'))))
//     .then(() => console.log('done'));

// helpers

function request(path, data, method) {
    if (method === 'GET') {
        const params = new URLSearchParams();
        Object.entries(data).forEach(([key, value]) => params.append(key, `${value}`));
        path += `?${params}`;
    }

    return new Promise((resolve, reject) => {
        if (VERBOSE) {
            console.log(path);
        }
        const req = require('https').request({
            hostname: 'api.github.com',
            port: 443,
            path,
            method,
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': `token ${GITHUB_ACCESS_TOKEN}`,
                'User-Agent': 'node.js',
            },
        }, res => {
            let body = '';
            res.on('data', chunk => {
                body += chunk;
            });
            res.on('end', () => {
                resolve(body ? JSON.parse(body) : body);
            });
        });

        req.on('error', reject);
        /POST|PUT|DELETE/.test(method) && req.write(JSON.stringify(data));
        req.end();
    });
}

function requestAll(path, data, method) {
    const result = [];

    let _recursive;
    return (_recursive = pageNum => request(path, {...data, page: pageNum, per_page: 100}, method).then(data => {
        if (data[0]) {
            result.push(...data);
            return _recursive(++pageNum);
        } else {
            return result;
        }
    }))(1);
}

function forkRepo(repo) {
    return request(`/repos/${repo}/forks`, {organization: 'badges-bot'}, 'POST');
}

function listOrgRepos(org) {
    return requestAll(`/orgs/${org}/repos`, {type: 'public'}, 'GET');
}

function readRepo(repo) {
    return request(`/repos/${repo}/readme`).then(({content, path, sha, encoding}) => [`${Buffer.from(content, encoding)}`, path, sha]);
}
