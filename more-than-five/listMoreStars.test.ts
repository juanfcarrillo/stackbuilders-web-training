import {describe, it, expect} from '@jest/globals';
import listMoreStars from './listMoreStarts.js';
import ghrepolist from '../data/ghrepolist.js';


describe('.listMoreStars', () => {
    describe ('when the list has repos with more than five stars', () => {    
        it('retrives a list of repos with more than 5 starts', () => {
            expect(listMoreStars(ghrepolist)).toHaveLength(30)
        })
    })

    describe('when the list dont has repos with more than five stars', () => {
        it('retrives an empty list', () => {
            expect(listMoreStars([])).toHaveLength(0)
        })
    })
})