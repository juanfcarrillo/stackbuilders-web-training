import { GhRepo } from "../models/GhRepo.js"

export default function sumAllStars(ghRepos: GhRepo[]) {
    const sum = ghRepos.reduce((sum, repo) => {
        return sum + repo['stargazers_count']
    }, 0)

    return sum
}