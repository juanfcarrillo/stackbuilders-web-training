import { GhRepo } from "../models/GhRepo.js"

export default function listAlphabetically(ghrepos: GhRepo[]){
    const filteredRepos = ghrepos.filter(repo => !repo.name.startsWith('h')) || []

    const sortedRepos = [...filteredRepos].sort((a,b) => a.name.localeCompare(b.name))

    return sortedRepos
}