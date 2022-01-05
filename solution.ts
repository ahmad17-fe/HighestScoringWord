export const high = (str: string): string => {
  const arrWord: Array<string> = str.split(" ");
  const arrCharCode: Array<number> = [];
  let highScore: number = 0;
  for (let i = 0; i < arrWord.length; i++) {
    const word: string = arrWord[i]; // word word word
    let sumCh: number = 0;
    for (let j = 0; j < word.length; j++) {
      sumCh += word.charCodeAt(j) - 96; // w, o, r, d
    }
    arrCharCode.push(sumCh);
    // console.log("sum: ", sumCh);
    // console.log("hs: ", highScore);
    // console.log("-------------------");
    if (sumCh > highScore) {
      highScore = sumCh;
      //   console.log("set: ", highScore);
    }
    // console.log("-------------------");
  }

  const getIndex: number = arrCharCode.indexOf(highScore);
  return arrWord[getIndex];
};
