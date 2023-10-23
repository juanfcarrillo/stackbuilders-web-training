import { expect } from "@jest/globals";
import topMoreThanFive from "./topMoreThanFive.js";
import ghrepolist from "../data/ghrepolist.js";

describe('.topMoreThanFive', () => {
    describe('When the repo have al least 5 repos with more than five stars', () => {
        it('return a list of length of five', () => {
            expect(topMoreThanFive(ghrepolist)).toHaveLength(5)
        })

        it('returns a list with the top 5 repositories with more stars', () => {
            expect(topMoreThanFive(ghrepolist).every(repo => repo['stargazers_count'] >= 3000000)).toBe(true)
        })
    })

    describe('When the repo have less than 5 repos with more than 5 stars', () => {
        it('throws an error of insufficient elements', () => {
            expect(() => topMoreThanFive([])).toThrow()
        })
    })
})