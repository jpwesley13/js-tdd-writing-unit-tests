//I want words to get points. Vowels get 1, consonants get two. In other words, "I expect calling the function pointsForWord("test") to return 7."

import {pointsForWord} from "../utils";

describe("pointsForWord", () => {
    it("handles uppercase and lowercase input", () => {
        const word = "tEsT";
      
        const points = pointsForWord(word);
      
        expect(points).toBe(7);
      });
  });