import {describe, expect, it} from '@jest/globals'
import sumAllStars from './sumAllStars.js'
import ghsumstarts from '../data/ghsumstarts.js'

describe('.sumAllStars', () => {
    it('sums all the stars of a list of gh repos', () => {
        expect(sumAllStars(ghsumstarts)).toBe(160)
    })
})