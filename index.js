import main from "./main.js"

const API_URL = 'https://api.github.com/orgs/stackbuilders/repos'

async function getRepos() {
    const response = await fetch(API_URL, {
        method: 'GET'
    })

    const repos = await response.json()

    return repos
}

main(getRepos)