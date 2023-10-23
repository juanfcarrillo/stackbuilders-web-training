import lastUpdated from "./last-updated/lastUpdated.js"
import { GhRepo } from "./models/GhRepo.js"
import listMoreStars from "./more-than-five/listMoreStarts.js"
import sumAllStars from "./sum-starts/sumAllStars.js"

export default async function main(getRepos: () => Promise<GhRepo[]>) {
    const repos = await getRepos()

    const moreThanFive = listMoreStars(repos)

    const lastUpdatedRepos = lastUpdated(repos)

    const sumStars = sumAllStars(repos)

    console.log(lastUpdatedRepos)
    console.log(moreThanFive)
    console.log(sumStars)
}