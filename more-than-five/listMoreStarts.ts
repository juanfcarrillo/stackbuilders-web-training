import { GhRepo } from "../models/GhRepo.js"

export default function listMoreStars(ghRepos: GhRepo[]){
    const moreThanFive = ghRepos.filter((repo) => repo['stargazers_count'] > 5)
    return moreThanFive
}