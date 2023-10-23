import main from "./main.js"
import { GhRepo } from "./models/GhRepo.js"

const API_URL = 'https://api.github.com/orgs/stackbuilders/repos'

async function getRepos() {
    const response = await fetch(API_URL, {
        method: 'GET'
    })

    const repos = await response.json() as Promise<GhRepo[]>

    return repos
}

main(getRepos)