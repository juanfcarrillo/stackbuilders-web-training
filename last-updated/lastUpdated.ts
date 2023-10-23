import { GhRepo } from "../models/GhRepo.js"

export default function lastUpdated(ghRepos: GhRepo[]) {
    if (ghRepos.length < 5) throw new Error('insufficient elements')

    const sortedRepos = [...ghRepos].sort((a, b) => new Date(b['updated_at']).valueOf() - new Date(a['updated_at']).valueOf())
    
    const lastUpdatedRepos = sortedRepos.slice(0,5)

    return lastUpdatedRepos
}