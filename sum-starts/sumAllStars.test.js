import {describe, expect} from '@jest/globals'
import sumAllStars from './sumAllStars'
import ghsumstarts from '../data/ghsumstarts'

describe('.sumAllStars', () => {
    it('sums all the stars of a list of gh repos', () => {
        expect(sumAllStars(ghsumstarts)).toBe(160)
    })
})