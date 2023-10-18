import { describe, expect } from '@jest/globals'
import lastUpdated from './lastUpdated.js'
import ghrepolist from '../data/ghrepolist.js'

describe('.lastUpdated', () => {

    describe('when has at least 5 repos', () => {
        it('returns a list of 5 elements', () => {
            expect(lastUpdated(ghrepolist)).toHaveLength(5)
        })
    
        it('has to return the last 5 updated repos', () => {
            expect(lastUpdated(ghrepolist).map(repo => repo['updated_at'])).toEqual([
                "2023-10-18T13:21:47.805Z",
                "2023-10-18T13:21:22.144Z",
                "2023-10-18T13:21:07.260Z",
                "2023-10-18T13:20:48.861Z",
                "2023-10-18T13:20:22.986Z"
            ])
        })
    })

    describe('when it has less than 5 repos', () => {
        it('throws an insufficient elements error', () => {
            expect(() => lastUpdated([])).toThrowError('insufficient elements')
        })
    })

})