import lastUpdated from "./last-updated/lastUpdated.js"
import listAlphabetically from "./list-alphabetically/listAlphabetically.js"
import { GhRepo } from "./models/GhRepo.js"
import listMoreStars from "./more-than-five/listMoreStarts.js"
import sumAllStars from "./sum-starts/sumAllStars.js"
import topMoreThanFive from "./top-more-than-five/topMoreThanFive.js"

export default async function main(getRepos: () => Promise<GhRepo[]>) {
    const repos = await getRepos()

    const moreThanFive = listMoreStars(repos)

    const lastUpdatedRepos = lastUpdated(repos)

    const sumStars = sumAllStars(repos)

    const topFive = topMoreThanFive(repos)

    const filterAlphaH = listAlphabetically(repos)

    console.log(lastUpdatedRepos)
    console.log(moreThanFive)
    console.log(sumStars)
    console.log(topFive)
    console.log(filterAlphaH)
}