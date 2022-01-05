import { high } from "./solution";

// Given a string of words, you need to find the highest scoring word.
// Diberikan serangkaian kata, Anda perlu menemukan kata dengan skor tertinggi.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// Setiap huruf dari sebuah kata mendapat poin sesuai dengan posisinya dalam alfabet: a = 1, b = 2, c = 3 dst.

// You need to return the highest scoring word as a string.
// Anda harus mengembalikan kata dengan skor tertinggi sebagai string.

// If two words score the same, return the word that appears earliest in the original string.
// Jika dua kata memiliki skor yang sama, kembalikan kata yang muncul paling awal dalam string asli.

// All letters will be lowercase and all inputs will be valid.
// Semua huruf akan menjadi huruf kecil dan semua input akan valid.

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
