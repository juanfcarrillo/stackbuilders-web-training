export default function sumAllStars(ghRepos) {
    const sum = ghRepos.reduce((sum, repo) => {
        return sum + repo['stargazers_count']
    }, 0)

    return sum
}