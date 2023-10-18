import lastUpdated from "./last-updated/lastUpdated.js"
import listMoreStars from "./more-than-five/listMoreStarts.js"

export default async function main(getRepos) {
    const repos = await getRepos()

    const moreThanFive = listMoreStars(repos)

    const lastUpdatedRepos = lastUpdated(repos)

    // console.log(moreThanFive)
    console.log(lastUpdatedRepos)
    console.log(moreThanFive)
}