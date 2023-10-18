export default function listMoreStars(ghRepos){
    const moreThanFive = ghRepos.filter((repo) => repo['stargazers_count'] > 5)
    return moreThanFive
}