import { high } from "./solution";

const solutions: Array<Array<string>> = [
  ["man i need a taxi up to ubud", "taxi"],
  ["what time are we climbing up the volcano", "volcano"],
  ["take me to semynak", "semynak"],
  ["massage yes massage yes massage", "massage"],
  ["take two bintang and a dance please", "bintang"],
  ["aa b", "aa"],
  ["b aa", "b"],
  ["bb d", "bb"],
  ["d bb", "d"],
  ["aaa b", "aaa"],
];

solutions.forEach(([input, expected]) => {
  console.log(`high: ${high(input)}, expected: ${expected}`);
});
