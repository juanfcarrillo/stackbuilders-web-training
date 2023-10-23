import { GhRepo } from "../models/GhRepo.js";
import listMoreStars from "../more-than-five/listMoreStarts.js";

export default function topMoreThanFive(ghRepos: GhRepo[]){
    const moreThanFive = listMoreStars(ghRepos)

    if (moreThanFive.length < 5) throw new Error('insufficient elements')

    const sortedElements = [...moreThanFive].sort((a,b) => b['stargazers_count'] - a['stargazers_count'])

    const topFive = sortedElements.slice(0,5)

    return topFive
}