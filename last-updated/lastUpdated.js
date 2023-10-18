export default function lastUpdated(ghRepos) {
    if (ghRepos.length < 5) throw new Error('insufficient elements')

    const sortedRepos = [...ghRepos].sort((a, b) => new Date(b['updated_at']) - new Date(a['updated_at']))
    
    const lastUpdatedRepos = sortedRepos.slice(0,5)

    return lastUpdatedRepos
}