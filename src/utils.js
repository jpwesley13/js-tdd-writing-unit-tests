// export function pointsForWord(word) {
//     let points = 0;
//     for (const char of word) {
//       if (["a", "e", "i", "o", "u"].includes(char)) {
//         points += 1;
//       } else {
//         points += 2;
//       }
//     }
//     return points;
//   } ORIGINAL VERSION

// export function pointsForWord(word) {
//     let points = 0;
//     for (const char of word) {
//       points += /[aeiou]/.test(char) ? 1 : 2;
//     }
//     return points;
//   } //Better version I know less about. Uses "regular expression to check for vowels."

export function pointsForWord(word) {
    let points = 0;
    for (const char of word) {
      points += /[aeiou]/i.test(char) ? 1 : 2; //i flag is here.
    }
    return points;
  } //Even newer version, uses "(in this case, using the i flag for the regular expression to indicate a case-insensitive match for either uppercase or lowercase values)"