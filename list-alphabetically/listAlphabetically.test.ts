import { describe, it } from "@jest/globals";
import listAlphabetically from "./listAlphabetically.js";
import ghalpha, { ghfilterh } from "../data/ghalpha.js";

describe('.listAlphabetically', () => {
    describe('when the list of repos have elements', () => {
        it('retrieves repositories alphabetically sorted', () => {
            expect(listAlphabetically(ghalpha).map(repo => repo['name'])).toEqual([
                'arepo',
                'brepo',
                'crepo'
            ])
        })
    
        it('filters repositories starting with an "h"', () => {
            expect(listAlphabetically(ghfilterh)).toEqual([])
        })    
    })

    describe('when the list of repos doesnt have elements', () => {
        it('retrieves an empty list', () => {
            
        })
    })
})